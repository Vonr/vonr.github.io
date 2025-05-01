const e=`<h1 id="title"><a class="section_heading no-underline dark:text-[#83a598]" href="#title">Compact String Lists</a></h1>
<h1 class="nolink" id="date">23 Jan 2024</h1>
<p>Around 8 months ago, I was working on <a href="https://github.com/Vonr/parui">parui</a>, a TUI for managing packages on <a href="https://archlinux.org">Arch</a>.</p>
<p>I had an idea to save memory in the list of package names by getting rid of the <code>cap</code> field of the <code>String</code>s, since package names are immutable.</p>
<p>Unfortunately, that means that I would have to make my own data structure, since we can't just delete the field in the standard library - that would break a lot of things.</p>
<h2 id="how-vecstring-works"><a class="section_heading no-underline dark:text-[#83a598]" href="#how-vecstring-works">How <code>Vec&#x3C;String></code> works</a></h2>
<p>I made a few diagrams with <a href="https://excalidraw.com/">Excalidraw</a> to make it easier to follow along -
here's one showing how <code>Vec</code>s and <code>String</code>s are represented in memory, though in a somewhat simplified form.</p>
<diagram><img src="/blog/compact-strings/vec-light.png" alt="How Vecs (and Strings) are represented in memory (simplified)"></diagram>
<p>As the diagram shows, a <code>Vec</code> contains 3 pointer sizes of information, excluding the actual data it holds.
This is a baseline for the amount of memory we will need.</p>
<p>Now, here's the representation of <code>Vec&#x3C;String></code> in memory.</p>
<diagram><img src="/blog/compact-strings/vec-string-light.png" alt="How Vec<String> is represented in memory"></diagram>
<p>We see that each <code>String</code> takes up another 3 pointer sizes of information, as they are just <code>Vec</code>s under the hood.</p>
<p>We will use <code>n</code> to notate the number of strings stored, thus giving us a total memory usage of <code>3n + 3</code> pointer sizes after accounting for the base <code>Vec</code>'s 3 pointer sizes.</p>
<h2 id="getting-more-space-efficient"><a class="section_heading no-underline dark:text-[#83a598]" href="#getting-more-space-efficient">Getting more space efficient</a></h2>
<p>My idea was to get rid of the <code>cap</code> field in the <code>String</code>s inside the <code>Vec</code>.</p>
<p>We can easily do that by making a <code>CompactString</code> with just a <code>ptr</code> and <code>len</code>.</p>
<p>This gives us the following representation.</p>
<diagram><img src="/blog/compact-strings/possible-light.png" alt="Possible memory representation"></diagram>
<p>This fulfills my expectations of a smaller representation of a list of strings with a memory footprint of <code>2n + 3</code>, meaning
it grows slower than <code>Vec&#x3C;String></code> by 1 pointer size per string.</p>
<p>However, <a href="https://github.com/Vonr/parui">parui</a> needs to store very many package names - my package repositories list
107329 packages at the time of writing this, which would result in 107329 allocations in order to populate the <code>Vec&#x3C;String></code>.</p>
<h2 id="sacrificing-memory-for-population-speed"><a class="section_heading no-underline dark:text-[#83a598]" href="#sacrificing-memory-for-population-speed">Sacrificing memory for population speed</a></h2>
<p>To solve this, we could perhaps use two <code>Vec</code>s instead - one to store the string data, and another to store the starts and lengths of the strings
inside the data <code>Vec</code> - at the cost of an additional 3 pointer sizes upfront, bringing it to a total of 6.</p>
<p>This also means that adding more strings is likely to be less expensive, as we have one large allocation that grows exponentially, allowing us
to reuse the allocation for longer instead of making a new allocation for each string.</p>
<p>This would look something like this.</p>
<diagram><img src="/blog/compact-strings/compactstrings-light.png" alt="How CompactStrings is represented in memory"></diagram>
<p>This representation means that although we grow our memory usage slower than <code>Vec&#x3C;String></code>,
we only save memory when there are at least 3 strings.</p>
<p>For my use case in <a href="https://github.com/Vonr/parui">parui</a>, this is acceptable since at the time of writing this,
since I would still be saving (107329 - 3) * 8 bytes, or 858.6 kB of memory on my 64-bit system,
while also having a faster population time.</p>
<p>Was it worth it? Well, parui still takes nearly 10 MB of memory - so probably not, although you could say it saved roughly 10% on memory usage.</p>
<h2 id="publishing"><a class="section_heading no-underline dark:text-[#83a598]" href="#publishing">Publishing</a></h2>
<p>I also decided to publish these data structures as a crate,
<a href="https://lib.rs/crates/compact_strings">compact_strings</a> (<a href="https://github.com/Vonr/compact_strings">repo</a>) (MIT), so that others can use it.</p>
<p>The crate also includes a <code>CompactBytestrings</code> data structure for replacing <code>Vec&#x3C;Vec&#x3C;u8>></code> with the same principles,
which is also now used as the backing structure of <code>CompactStrings</code>.</p>
<p>I have also included some <a href="https://github.com/Vonr/compact_strings/blob/master/benchmarks/BENCHMARKS.md">benchmarks</a> to compare the data structures provided by this crate against the <code>Vec</code>-based
structures they are intended to replace. Unfortunately, it is often slower - though by less than a magnitude,
because it requires 2 accesses - one for metadata and one for the actual data - instead of only 1 for the <code>Vec</code>-based
structures. That said, it did manage to squeeze out better performance when populating the list, being roughly twice
as fast at populating a list of 10 million strings as measured on my machine.</p>
<h2 id="future-efforts"><a class="section_heading no-underline dark:text-[#83a598]" href="#future-efforts">Future Efforts</a></h2>
<p>In theory, it should be possible to expose a limited mutation API for <code>CompactBytestrings</code> and <code>CompactStrings</code>, but it would
be riddled with validation checks that are easy to do wrong and cause bugs. Besides, I think such an API
would be severely limiting, with the most powerful operation likely being a <code>map</code> or <code>replace</code> with the heavy limitation
of the size in bytes of the replaced string being less than or equal to the size in bytes of the starting string.</p>
<h2 id="addendum"><a class="section_heading no-underline dark:text-[#83a598]" href="#addendum">Addendum</a></h2>
<p>The <code>compact_strings</code> crate now features an even more compact representation dubbed "fixed" compact strings (and bytestrings).
These representations only use <code>n + 6</code> pointer sizes of auxiliary memory by getting rid of the lengths in the metadata.<br>
Unfortunately, this efficiency is not free as it makes some parts of the API - especially those related to mutation, less
flexible or more expensive - methods like <code>ignore</code> are now impossible to implement for example.</p>
<p>This was an idea sparked by <a href="https://github.com/caibear">Jimmy</a> (cai_bear on Discord) and was implemented with help
from <a href="https://github.com/GnomedDev">Gnome</a> (gnomeddev on Discord). A big thanks to both of them!</p>`;export{e as default};
