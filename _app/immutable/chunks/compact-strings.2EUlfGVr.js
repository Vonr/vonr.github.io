const e=`<h1>Compact String Lists</h1>
<h1>23 Jan 2024</h1>
<p>Around 8 months ago, I was working on <a href="https://github.com/Vonr/parui" target="_blank">parui</a>, a TUI for managing packages on <a href="https://archlinux.org" target="_blank">Arch</a>.</p>
<p>I had an idea to save memory in the list of package names by getting rid of the <code>cap</code> field of the <code>String</code>s, since package names are immutable.</p>
<p>Unfortunately, that means that I would have to make my own data structure, since we can't just delete the field in the standard library - that would break a lot of things.</p>
<h2 id="how-vec-string-works" tabindex="-1"><a class="header-anchor" href="#how-vec-string-works" aria-hidden="true" target="_self">#</a> How <code>Vec&lt;String&gt;</code> works</h2>
<p>I made a few diagrams with <a href="https://excalidraw.com/" target="_blank">Excalidraw</a> to make it easier to follow along -
here's one showing how <code>Vec</code>s and <code>String</code>s are represented in memory, though in a somewhat simplified form.</p>
<div class="diagram">
<p><img src="/blog/compact-strings/vec-light.png" alt="How Vecs (and Strings) are represented in memory (simplified)"></p>
</div>
<p>As the diagram shows, a <code>Vec</code> contains 3 pointer sizes of information, excluding the actual data it holds.
This is a baseline for the amount of memory we will need.</p>
<p>Now, here's the representation of <code>Vec&lt;String&gt;</code> in memory.</p>
<div class="diagram">
<p><img src="/blog/compact-strings/vec-string-light.png" alt="How VecString is represented in memory"></p>
</div>
<p>We see that each <code>String</code> takes up another 3 pointer sizes of information, as they are just <code>Vec</code>s under the hood.</p>
<p>We will use <code>n</code> to notate the number of strings stored, thus giving us a total memory usage of <code>3n + 3</code> pointer sizes after accounting for the base <code>Vec</code>'s 3 pointer sizes.</p>
<h2 id="getting-more-space-efficient" tabindex="-1"><a class="header-anchor" href="#getting-more-space-efficient" aria-hidden="true" target="_self">#</a> Getting more space efficient</h2>
<p>My idea was to get rid of the <code>cap</code> field in the <code>String</code>s inside the <code>Vec</code>.</p>
<p>We can easily do that by making a <code>CompactString</code> with just a <code>ptr</code> and <code>len</code>.</p>
<p>This gives us the following representation.</p>
<div class="diagram">
<p><img src="/blog/compact-strings/possible-light.png" alt="Possible memory representation"></p>
</div>
<p>This fulfills my expectations of a smaller representation of a list of strings with a memory footprint of <code>2n + 3</code>, meaning
it grows slower than <code>Vec&lt;String&gt;</code> by 1 pointer size per string.</p>
<p>However, <a href="https://github.com/Vonr/parui" target="_blank">parui</a> needs to store very many package names - my package repositories list
107329 packages at the time of writing this, which would result in 107329 allocations in order to populate the <code>Vec&lt;String&gt;</code>.</p>
<h2 id="sacrificing-memory-for-population-speed" tabindex="-1"><a class="header-anchor" href="#sacrificing-memory-for-population-speed" aria-hidden="true" target="_self">#</a> Sacrificing memory for population speed</h2>
<p>To solve this, we could perhaps use two <code>Vec</code>s instead - one to store the string data, and another to store the starts and lengths of the strings
inside the data <code>Vec</code> - at the cost of an additional 3 pointer sizes upfront, bringing it to a total of 6.</p>
<p>This also means that adding more strings is likely to be less expensive, as we have one large allocation that grows exponentially, allowing us
to reuse the allocation for longer instead of making a new allocation for each string.</p>
<p>This would look something like this.</p>
<div class="diagram">
<p><img src="/blog/compact-strings/compactstrings-light.png" alt="How CompactStrings is represented in memory"></p>
</div>
<p>This representation means that although we grow our memory usage slower than <code>Vec&lt;String&gt;</code>,
we only save memory when there are at least 3 strings.</p>
<p>For my use case in <a href="https://github.com/Vonr/parui" target="_blank">parui</a>, this is acceptable since at the time of writing this,
since I would still be saving (107329 - 3) * 8 bytes, or 858.6 kB of memory on my 64-bit system,
while also having a faster population time.</p>
<p>Was it worth it? Well, parui still takes nearly 10 MB of memory - so probably not, although you could say it saved roughly 10% on memory usage.</p>
<h2 id="publishing" tabindex="-1"><a class="header-anchor" href="#publishing" aria-hidden="true" target="_self">#</a> Publishing</h2>
<p>I also decided to publish these data structures as a crate,
<a href="https://lib.rs/crates/compact_strings" target="_blank">compact_strings</a> (<a href="https://github.com/Vonr/compact_strings" target="_blank">repo</a>) (MIT), so that others can use it.</p>
<p>The crate also includes a <code>CompactBytestrings</code> data structure for replacing <code>Vec&lt;Vec&lt;u8&gt;&gt;</code> with the same principles,
which is also now used as the backing structure of <code>CompactStrings</code>.</p>
<p>I have also included some <a href="https://github.com/Vonr/compact_strings/blob/master/benchmarks/BENCHMARKS.md" target="_blank">benchmarks</a> to compare the data structures provided by this crate against the <code>Vec</code>-based
structures they are intended to replace. Unfortunately, it is often slower - though by less than a magnitude,
because it requires 2 accesses - one for metadata and one for the actual data - instead of only 1 for the <code>Vec</code>-based
structures. That said, it did manage to squeeze out better performance when populating the list, being roughly twice
as fast at populating a list of 10 million strings as measured on my machine.</p>
<h2 id="future-efforts" tabindex="-1"><a class="header-anchor" href="#future-efforts" aria-hidden="true" target="_self">#</a> Future Efforts</h2>
<p>In theory, it should be possible to expose a limited mutation API for <code>CompactBytestrings</code> and <code>CompactStrings</code>, but it would
be riddled with validation checks that are easy to do wrong and cause bugs. Besides, I think such an API
would be severely limiting, with the most powerful operation likely being a <code>map</code> or <code>replace</code> with the heavy limitation
of the size in bytes of the replaced string being less than or equal to the size in bytes of the starting string.</p>
<h2 id="addendum" tabindex="-1"><a class="header-anchor" href="#addendum" aria-hidden="true" target="_self">#</a> Addendum</h2>
<p>The <code>compact_strings</code> crate now features an even more compact representation dubbed &quot;fixed&quot; compact strings (and bytestrings).
These representations only use <code>n + 6</code> pointer sizes of auxiliary memory by getting rid of the lengths in the metadata.<br>
Unfortunately, this efficiency is not free as it makes some parts of the API - especially those related to mutation, less
flexible or more expensive - methods like <code>ignore</code> are now impossible to implement for example.</p>
<p>This was an idea sparked by <a href="https://github.com/caibear" target="_blank">Jimmy</a> (cai_bear on Discord) and was implemented with help
from <a href="https://github.com/GnomedDev" target="_blank">Gnome</a> (gnomeddev on Discord). A big thanks to both of them!</p>
`;export{e as default};
