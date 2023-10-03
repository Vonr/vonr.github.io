const s=`<h1>Why Rust?</h1>
<h1>Sep 20 2023</h1>
<p>I have used a variety of languages since I first started my foray into programming.</p>
<p>I started with Javascript, learnt Java, hopped to Kotlin, pivoted to Go, and touched on a bunch of other languages along the way.</p>
<p>Despite all my time with these other languages, I find myself routinely reaching for Rust
for whatever I am working on.</p>
<p>Rust was a language that I had a lot of trouble picking up.<br>
I attempted learning it 8 times before it finally clicked.<br>
What made it so different, and why do I enjoy it?</p>
<h2 id="the-borrow-checker" tabindex="-1"><a class="header-anchor" href="#the-borrow-checker" aria-hidden="true" target="_self">#</a> The Borrow Checker</h2>
<p>Rust has a system that it calls the borrow checker.<br>
This program is at the core of Rust, upholding its borrowing rules.</p>
<p>In Rust, when something is passed by value to another function, it is moved out of its original function.
This means that you can no longer access it, even after the function is over.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-variable">s</span> = <span class="hljs-type">String</span>::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Hello, world!&quot;</span>);

    <span class="hljs-title function_ invoke__">print</span>(s);

    <span class="hljs-comment">// This would be an error, as s has moved into \`print\`</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">print</span>(s: <span class="hljs-type">String</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=4cd8bcc42a9e27c8a287a0295b68a362" target="_blank">Playground</a></p>
<p>Of course, this by itself is inconvenient.<br>
That's why Rust makes heavy use of borrows - creating references to values.</p>
<p>References are split into two distinct types: shared and immutable, and exclusive and mutable.</p>
<p>Mutable references can not coexist with any other reference, regardless of mutability.</p>
<p>As such, you must pick between having as many immutable references to an object as needed,
or a single mutable reference.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-variable">s</span> = <span class="hljs-type">String</span>::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Hello, world!&quot;</span>);

    <span class="hljs-comment">// We give \`print\` a reference to \`s\` instead of \`s\` itself</span>
    <span class="hljs-title function_ invoke__">print</span>(&amp;s);

    <span class="hljs-comment">// \`s\` has not been moved out of this function,</span>
    <span class="hljs-comment">// and is thus still valid.</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}

<span class="hljs-comment">// \`print\` now takes in reference to a String.</span>
<span class="hljs-comment">//</span>
<span class="hljs-comment">// P.S. the type should really be &amp;str since</span>
<span class="hljs-comment">// we are only interested in the data of</span>
<span class="hljs-comment">// the string.</span>
<span class="hljs-keyword">fn</span> <span class="hljs-title function_">print</span>(s: &amp;<span class="hljs-type">String</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=d1c040196f4c5a11c920ad0c9a2874a6" target="_blank">Playground</a></p>
<p>This rule may seem quite arbitrary at first glance, but this simple rule prevents an entire class of bugs,
such as use-after-free and double-free, which may be especially freeing for developers coming from a C or C++ background.</p>
<p>The borrow checker also gives Rust the ability to know when a value can be freed
statically at compile-time, making the use of a garbage collector unnecessary and
allowing the programmer to not have to worry about memory leaks.</p>
<p>That said, Rust also gives you the tools to free (or <code>drop</code>) a value manually as long as you have ownership of it.<br>
In fact, it is such a simple function you could write it yourself - no compiler magic!</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">drop</span>&lt;T&gt;(_x: T) {}
</code></pre>
<p><a href="https://doc.rust-lang.org/std/mem/fn.drop.html" target="_blank">Docs</a></p>
<p>If you wish to learn more about what the borrow checker does, I recommend reading<br>
<a href="https://blog.logrocket.com/introducing-the-rust-borrow-checker/" target="_blank">this article</a>.</p>
<h2 id="enums-sum-types" tabindex="-1"><a class="header-anchor" href="#enums-sum-types" aria-hidden="true" target="_self">#</a> Enums (Sum Types)</h2>
<p>The borrow checker is really neat, but one of the biggest reasons I love Rust is how
expressive the language is, in many ways thanks to its powerful enums.</p>
<p>If you're familiar with algebraic type systems, Rust's enums are sum types,
and those of you who know what that implies would already be excited about it.</p>
<p>Let's take a look at the <code>Option</code> type.
This type exists in the <a href="https://doc.rust-lang.org/std/option/enum.Option.html" target="_blank">standard library</a>
and is defined similarly to this.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">enum</span> <span class="hljs-title class_">Option</span>&lt;T&gt; {
    <span class="hljs-title function_ invoke__">Some</span>(T),
    <span class="hljs-literal">None</span>,
}
</code></pre>
<p>It replaces the <code>null</code>s and <code>nil</code>s of other languages and is analogous to the <code>Maybe</code> type in Haskell.</p>
<p>The most obvious advantage of using a sum type to represent &quot;nullable&quot; values is that they are typed, unlike <code>null</code>s in
a few other languages such as Java, where you can pass a <code>null</code> for any argument.</p>
<p>In Rust, you would have to explicitly write that what you are expecting is an <code>Option</code>.<br>
If you don't, you will simply get a compile error.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">foo</span>(num: <span class="hljs-type">Option</span>&lt;<span class="hljs-type">i32</span>&gt;) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;<span class="hljs-type">i32</span>&gt; {
    num.<span class="hljs-title function_ invoke__">map</span>(|num| num * <span class="hljs-number">2</span>)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-built_in">assert_eq!</span>(<span class="hljs-title function_ invoke__">foo</span>(<span class="hljs-literal">None</span>), <span class="hljs-literal">None</span>);
    <span class="hljs-built_in">assert_eq!</span>(<span class="hljs-title function_ invoke__">foo</span>(<span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">2</span>)), <span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">4</span>));
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=89255fd5cb5ab72b62c8ff772e599acc" target="_blank">Playground</a></p>
<p>As shown in the above example, another advantage is that being a type, we can attach methods such as <code>map</code> onto it.</p>
<p>This makes working with optional values more concise and convenient.</p>
<p>Rust also has a <code>Result</code> type which is very similar to <code>Option</code>, replacing exceptions instead of <code>null</code>.
You can read more about it <a href="https://doc.rust-lang.org/std/result/enum.Result.html" target="_blank">here</a>.</p>
<h2 id="traits-typeclasses" tabindex="-1"><a class="header-anchor" href="#traits-typeclasses" aria-hidden="true" target="_self">#</a> Traits (Typeclasses)</h2>
<p>If you've had experience with the ML family of langauges or Haskell, you would be familiar with the concept of typeclasses.</p>
<p>Rust was influenced by Haskell's typeclasses, resulting in traits.</p>
<p>Traits allow us to compartmentalize behaviour into interface-like structures.</p>
<p>We can implement any number of traits for an enum or struct.<br>
We can also implement foreign traits for our own types, or our own traits for foreign types.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">trait</span> <span class="hljs-title class_">Legged</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">legs</span>(&amp;<span class="hljs-keyword">self</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Table</span> {
    legs: <span class="hljs-type">u64</span>,
}

<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Chair</span>;

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Legged</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Table</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">legs</span>(&amp;<span class="hljs-keyword">self</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">self</span>.legs
    }
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Legged</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Chair</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">legs</span>(&amp;<span class="hljs-keyword">self</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-number">4</span>
    }
}

<span class="hljs-comment">// This function takes in any L such that L implements Legged.</span>
<span class="hljs-keyword">fn</span> <span class="hljs-title function_">has_more_than_3_legs</span>&lt;L: Legged&gt;(legged: L) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">bool</span> {
    legged.<span class="hljs-title function_ invoke__">legs</span>() &gt; <span class="hljs-number">3</span>
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-built_in">assert!</span>(<span class="hljs-title function_ invoke__">has_more_than_3_legs</span>(Chair));
    <span class="hljs-built_in">assert!</span>(!<span class="hljs-title function_ invoke__">has_more_than_3_legs</span>(Table { legs: <span class="hljs-number">3</span> }))
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=0c7470eeff0dd17b784d38d27eb75507" target="_blank">Playground</a></p>
<p>In the above example, the function <code>has_more_than_3_legs</code> has a simple generic bound, but typeclasses let us express
much more complex bounds.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">use</span> std::ops::Add;
<span class="hljs-keyword">use</span> std::fmt::Display;

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">double_and_print</span>&lt;T: Add&lt;Output = T&gt; + Display + <span class="hljs-built_in">Clone</span>&gt;(val: T) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, val.<span class="hljs-title function_ invoke__">clone</span>() + val)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-title function_ invoke__">double_and_print</span>(<span class="hljs-number">2</span>); <span class="hljs-comment">// prints &quot;4&quot;</span>
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=ccf2621556e0fe53957be7c9f89938db" target="_blank">Playground</a></p>
<p>There are also alternative syntaxes to specify bounds.
For longer bounds like that of <code>double_and_print</code>, we can use the <code>where</code> keyword to specify the bounds after the arguments.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">double_and_print</span>&lt;T&gt;(val: T)
<span class="hljs-keyword">where</span>
    T: Add&lt;Output = T&gt; + Display + <span class="hljs-built_in">Clone</span>
{
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, val.<span class="hljs-title function_ invoke__">clone</span>() + val)
}
</code></pre>
<p>For shorter bounds, we can use the <code>impl</code> keyword inside the arguments themselves, but this would prevent us from specifying
the generic type(s) if type inference falls short.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">debug</span>(val: <span class="hljs-keyword">impl</span> <span class="hljs-title class_">Display</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{val}&quot;</span>)
}
</code></pre>
<p>Rust has a lot of small conveniences like this, making it both flexible and pleasant to use.</p>
<p>You can also use dynamic dispatch to make a &quot;trait object&quot; type.</p>
<p>It should be noted that trait objects are unsized as different implementors of the trait may have different sizes.<br>
As such, we put them on the heap using the <code>Box</code> smart pointer and store them in a heap-allocated <code>Vec</code>.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">use</span> std::fmt::<span class="hljs-built_in">Debug</span>;

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-variable">vec</span>: <span class="hljs-type">Vec</span>&lt;<span class="hljs-type">Box</span>&lt;<span class="hljs-keyword">dyn</span> <span class="hljs-built_in">Debug</span>&gt;&gt; = <span class="hljs-built_in">vec!</span>[
        <span class="hljs-type">Box</span>::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-number">1</span>),
        <span class="hljs-type">Box</span>::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">3</span>)), 
        <span class="hljs-type">Box</span>::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-string">&quot;test&quot;</span>)
    ];
    
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{vec:?}&quot;</span>)
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=05af188547fe84ba81c0aae62f8e2373" target="_blank">Playground</a></p>
<h2 id="iterators" tabindex="-1"><a class="header-anchor" href="#iterators" aria-hidden="true" target="_self">#</a> Iterators</h2>
<p>Iterators are by far my favourite feature of Rust, utilizing its powerful type system
to create a concise and easy way of manipulating data.</p>
<p>Most collection types in Rust either have an <code>iter</code> method or implement <code>IntoIterator</code>,
which craetes an <code>Iterator</code> over them.</p>
<p>Once in an <code>Iterator</code>, you get access to a wide variety of helper methods to manipulate it
such as <code>filter</code>, <code>map</code>, <code>skip</code>, and <code>take</code> among many more.</p>
<p>Rust's <code>Iterator</code> is &quot;lazy&quot;, meaning that operations on them only run when needed.
This avoids allocating a container for each operation, which would be necessary in a strict API.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-comment">// This is a bad use of \`map\`, \`inspect\` is more suitable here.</span>
    (<span class="hljs-number">1</span>..=<span class="hljs-number">10</span>).<span class="hljs-title function_ invoke__">map</span>(|n| <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{n}&quot;</span>)).<span class="hljs-title function_ invoke__">take</span>(<span class="hljs-number">3</span>).<span class="hljs-title function_ invoke__">for_each</span>(drop);
    <span class="hljs-comment">// By the end of the loop,</span>
    <span class="hljs-comment">// we&#x27;d have printed</span>
    <span class="hljs-comment">// next 1</span>
    <span class="hljs-comment">// next 2</span>
    <span class="hljs-comment">// next 3</span>
}
</code></pre>
<p><a href="https://play.rust-lang.org/?version=stable&amp;mode=debug&amp;edition=2021&amp;gist=480f6d4ab0935f7cb3e254f0237f6cd9" target="_blank">Playground</a></p>
<p>Notice how we only printed &quot;next&quot; three times, despite the <code>inspect</code> taking place before <code>take</code>.</p>
<p>The <code>Iterator</code> we produced is equivalent to the following imperative code.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">count</span> = <span class="hljs-number">0</span>;
<span class="hljs-keyword">for</span> <span class="hljs-variable">n</span> <span class="hljs-keyword">in</span> (<span class="hljs-number">1</span>..=<span class="hljs-number">10</span>) {
    <span class="hljs-comment">// Shadowing the binding of \`n\` to the result of the map.</span>
    <span class="hljs-keyword">let</span> <span class="hljs-variable">n</span> = <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{n}&quot;</span>);

    count += <span class="hljs-number">1</span>;
    <span class="hljs-keyword">if</span> count &gt;= <span class="hljs-number">3</span> {
        <span class="hljs-keyword">break</span>
    }

    <span class="hljs-comment">// inner loop</span>
}
</code></pre>
<p>While doing the same in Javascript would lead to the equivalent of the following instead,
not only unexpectedly printing all 10 numbers, but also allocating two new arrays.</p>
<pre class="hljs codeblock"><code><span class="hljs-keyword">let</span> mapped = [];

<span class="hljs-keyword">for</span> (n <span class="hljs-keyword">of</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>]) {
    mapped.<span class="hljs-title function_">push</span>(<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(n));
}

<span class="hljs-keyword">let</span> taken = mapped.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>, <span class="hljs-number">3</span>);

<span class="hljs-keyword">for</span> (n <span class="hljs-keyword">of</span> taken) {
    <span class="hljs-comment">// inner loop</span>
}
</code></pre>
<p>In my experience, I have never encountered a situation where I'd rather have a strict API here,
and Rust's lack of container allocations makes it the better option for me.</p>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true" target="_self">#</a> Conclusion</h2>
<p>I have only discussed a small portion of the reasons that I love using Rust, but the
reasons I have discussed are the primary reasons why I continue to choose Rust for
many of my projects.</p>
<p>With all that said, I believe it is worth nothing that Rust is neither a perfect langauge
nor a language that should be used for everything.</p>
<p>In fact, I considered writing this website in Rust for fun, but decided against it in the
end as I would be losing out on the fantastic Javascript ecosystem which could help
me push out this website faster.</p>
<p>I believe that Rust deserves a spot on your toolbelt, so that you can easily
harness it's powers when it fits the project. I personally make a lot of
command-line utilities, which I believe Rust to be an excellent choice for.</p>
<p>If you are interested in learning Rust, I strongly recommend reading the <a href="https://doc.rust-lang.org/book" target="_blank">Book</a>
or doing <a href="https://github.com/rust-lang/rustlings" target="_blank">Rustlings exercises</a>.</p>
`;export{s as default};
