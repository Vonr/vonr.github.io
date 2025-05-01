---
title: 'Compact String Lists'
date: '23 Jan 2024'
---

Around 8 months ago, I was working on [parui](https://github.com/Vonr/parui), a TUI for managing packages on [Arch](https://archlinux.org).

I had an idea to save memory in the list of package names by getting rid of the `cap` field of the `String`s, since package names are immutable.

Unfortunately, that means that I would have to make my own data structure, since we can't just delete the field in the standard library - that would break a lot of things.

## How `Vec<String>` works

I made a few diagrams with [Excalidraw](https://excalidraw.com/) to make it easier to follow along - 
here's one showing how `Vec`s and `String`s are represented in memory, though in a somewhat simplified form.

:::diagram
![How Vecs (and Strings) are represented in memory (simplified)](/blog/compact-strings/vec-light.png)
:::

As the diagram shows, a `Vec` contains 3 pointer sizes of information, excluding the actual data it holds.
This is a baseline for the amount of memory we will need.

Now, here's the representation of `Vec<String>` in memory.

:::diagram
![How Vec\<String\> is represented in memory](/blog/compact-strings/vec-string-light.png)
:::

We see that each `String` takes up another 3 pointer sizes of information, as they are just `Vec`s under the hood.

We will use `n` to notate the number of strings stored, thus giving us a total memory usage of `3n + 3` pointer sizes after accounting for the base `Vec`'s 3 pointer sizes.

## Getting more space efficient

My idea was to get rid of the `cap` field in the `String`s inside the `Vec`.

We can easily do that by making a `CompactString` with just a `ptr` and `len`.

This gives us the following representation.

:::diagram
![Possible memory representation](/blog/compact-strings/possible-light.png)
:::

This fulfills my expectations of a smaller representation of a list of strings with a memory footprint of `2n + 3`, meaning
it grows slower than `Vec<String>` by 1 pointer size per string.

However, [parui](https://github.com/Vonr/parui) needs to store very many package names - my package repositories list
107329 packages at the time of writing this, which would result in 107329 allocations in order to populate the `Vec<String>`.

## Sacrificing memory for population speed

To solve this, we could perhaps use two `Vec`s instead - one to store the string data, and another to store the starts and lengths of the strings
inside the data `Vec` - at the cost of an additional 3 pointer sizes upfront, bringing it to a total of 6.

This also means that adding more strings is likely to be less expensive, as we have one large allocation that grows exponentially, allowing us
to reuse the allocation for longer instead of making a new allocation for each string.

This would look something like this.

:::diagram
![How CompactStrings is represented in memory](/blog/compact-strings/compactstrings-light.png)
:::

This representation means that although we grow our memory usage slower than `Vec<String>`, 
we only save memory when there are at least 3 strings.

For my use case in [parui](https://github.com/Vonr/parui), this is acceptable since at the time of writing this,
since I would still be saving (107329 - 3) * 8 bytes, or 858.6 kB of memory on my 64-bit system,
while also having a faster population time.

Was it worth it? Well, parui still takes nearly 10 MB of memory - so probably not, although you could say it saved roughly 10% on memory usage.

## Publishing

I also decided to publish these data structures as a crate,
[compact_strings](https://lib.rs/crates/compact_strings) ([repo](https://github.com/Vonr/compact_strings)) (MIT), so that others can use it.

The crate also includes a `CompactBytestrings` data structure for replacing `Vec<Vec<u8>>` with the same principles, 
which is also now used as the backing structure of `CompactStrings`.

I have also included some [benchmarks](https://github.com/Vonr/compact_strings/blob/master/benchmarks/BENCHMARKS.md) to compare the data structures provided by this crate against the `Vec`-based
structures they are intended to replace. Unfortunately, it is often slower - though by less than a magnitude,
because it requires 2 accesses - one for metadata and one for the actual data - instead of only 1 for the `Vec`-based
structures. That said, it did manage to squeeze out better performance when populating the list, being roughly twice
as fast at populating a list of 10 million strings as measured on my machine.

## Future Efforts

In theory, it should be possible to expose a limited mutation API for `CompactBytestrings` and `CompactStrings`, but it would
be riddled with validation checks that are easy to do wrong and cause bugs. Besides, I think such an API
would be severely limiting, with the most powerful operation likely being a `map` or `replace` with the heavy limitation
of the size in bytes of the replaced string being less than or equal to the size in bytes of the starting string.

## Addendum

The `compact_strings` crate now features an even more compact representation dubbed "fixed" compact strings (and bytestrings).
These representations only use `n + 6` pointer sizes of auxiliary memory by getting rid of the lengths in the metadata.  
Unfortunately, this efficiency is not free as it makes some parts of the API - especially those related to mutation, less 
flexible or more expensive - methods like `ignore` are now impossible to implement for example.

This was an idea sparked by [Jimmy](https://github.com/caibear) (cai_bear on Discord) and was implemented with help
from [Gnome](https://github.com/GnomedDev) (gnomeddev on Discord). A big thanks to both of them!
