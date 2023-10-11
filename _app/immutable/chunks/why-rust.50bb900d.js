const n=`<h1>Why Rust?</h1>
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

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20print(s%3A%20String)%20%7B%0A%20%20%20%20println!(%22%7Bs%7D%22)%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20s%20%3D%20String%3A%3Afrom(%22Hello%2C%20world!%22)%3B%0A%0A%20%20%20%20print(s)%3B%0A%0A%20%20%20%20%2F%2F%20This%20would%20be%20an%20error%2C%20as%20s%20has%20moved%20into%20%60print%60%0A%20%20%20%20println!(%22%7Bs%7D%22)%0A%7D%0A"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp').innerText)">
            <div class="hidden aria-hidden" id='cbcp'>fn print(s: String) {
    println!("{s}")
}

fn main() {
    let s = String::from("Hello, world!");

    print(s);

    // This would be an error, as s has moved into \`print\`
    println!("{s}")
}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">print</span>(s: <span class="hljs-type">String</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-variable">s</span> = <span class="hljs-type">String</span>::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Hello, world!&quot;</span>);

    <span class="hljs-title function_ invoke__">print</span>(s);

    <span class="hljs-comment">// This would be an error, as s has moved into \`print\`</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}
</code></pre>
<p>Of course, this by itself is inconvenient.<br>
That's why Rust makes heavy use of borrows - creating references to values.</p>
<p>References are split into two distinct types: shared and immutable, and exclusive and mutable.</p>
<p>Mutable references can not coexist with any other reference, regardless of mutability.</p>
<p>As such, you must pick between having as many immutable references to an object as needed,
or a single mutable reference.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F%20%60print%60%20now%20takes%20in%20reference%20to%20a%20String.%0A%2F%2F%0A%2F%2F%20P.S.%20the%20type%20should%20really%20be%20%26str%20since%0A%2F%2F%20we%20are%20only%20interested%20in%20the%20data%20of%0A%2F%2F%20the%20string.%0Afn%20print(s%3A%20%26String)%20%7B%0A%20%20%20%20println!(%22%7Bs%7D%22)%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20let%20s%20%3D%20String%3A%3Afrom(%22Hello%2C%20world!%22)%3B%0A%0A%20%20%20%20%2F%2F%20We%20give%20%60print%60%20a%20reference%20to%20%60s%60%20instead%20of%20%60s%60%20itself%0A%20%20%20%20print(%26s)%3B%0A%0A%20%20%20%20%2F%2F%20%60s%60%20has%20not%20been%20moved%20out%20of%20this%20function%2C%0A%20%20%20%20%2F%2F%20and%20is%20thus%20still%20valid.%0A%20%20%20%20println!(%22%7Bs%7D%22)%0A%7D%0A"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-2').innerText)">
            <div class="hidden aria-hidden" id='cbcp-2'>// \`print\` now takes in reference to a String.
//
// P.S. the type should really be &str since
// we are only interested in the data of
// the string.
fn print(s: &String) {
    println!("{s}")
}

fn main() {
    let s = String::from("Hello, world!");

    // We give \`print\` a reference to \`s\` instead of \`s\` itself
    print(&s);

    // \`s\` has not been moved out of this function,
    // and is thus still valid.
    println!("{s}")
}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-comment">// \`print\` now takes in reference to a String.</span>
<span class="hljs-comment">//</span>
<span class="hljs-comment">// P.S. the type should really be &amp;str since</span>
<span class="hljs-comment">// we are only interested in the data of</span>
<span class="hljs-comment">// the string.</span>
<span class="hljs-keyword">fn</span> <span class="hljs-title function_">print</span>(s: &amp;<span class="hljs-type">String</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-keyword">let</span> <span class="hljs-variable">s</span> = <span class="hljs-type">String</span>::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-string">&quot;Hello, world!&quot;</span>);

    <span class="hljs-comment">// We give \`print\` a reference to \`s\` instead of \`s\` itself</span>
    <span class="hljs-title function_ invoke__">print</span>(&amp;s);

    <span class="hljs-comment">// \`s\` has not been moved out of this function,</span>
    <span class="hljs-comment">// and is thus still valid.</span>
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{s}&quot;</span>)
}
</code></pre>
<p>This rule may seem quite arbitrary at first glance, but this simple rule prevents an entire class of bugs,
such as use-after-free and double-free, which may be especially freeing for developers coming from a C or C++ background.</p>
<p>The borrow checker also gives Rust the ability to know when a value can be freed
statically at compile-time, making the use of a garbage collector unnecessary and
allowing the programmer to not have to worry about memory leaks.</p>
<p>That said, Rust also gives you the tools to free (or <code>drop</code>) a value manually as long as you have ownership of it.<br>
In fact, it is such a simple function you could write it yourself - no compiler magic!</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        
        <a href="https://doc.rust-lang.org/std/mem/fn.drop.html" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">docs</a>
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-3').innerText)">
            <div class="hidden aria-hidden" id='cbcp-3'>pub fn drop<T>(_x: T) {}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">pub</span> <span class="hljs-keyword">fn</span> <span class="hljs-title function_">drop</span>&lt;T&gt;(_x: T) {}
</code></pre>
<p>If you wish to learn more about what the borrow checker does, I recommend reading<br>
<a href="https://blog.logrocket.com/introducing-the-rust-borrow-checker/" target="_blank">this article</a>.</p>
<h2 id="enums-sum-types" tabindex="-1"><a class="header-anchor" href="#enums-sum-types" aria-hidden="true" target="_self">#</a> Enums (Sum Types)</h2>
<p>The borrow checker is really neat, but one of the biggest reasons I love Rust is how
expressive the language is, in many ways thanks to its powerful enums.</p>
<p>If you're familiar with algebraic type systems, Rust's enums are sum types,
and those of you who know what that implies would already be excited about it.</p>
<p>Let's take a look at the <code>Option</code> type.
This type exists in the standard library
and is defined similarly to this.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        
        <a href="https://doc.rust-lang.org/std/option/enum.Option.html" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">docs</a>
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-4').innerText)">
            <div class="hidden aria-hidden" id='cbcp-4'>enum Option<T> {
    Some(T),
    None,
}
</div>
            copy
        </button>
    </span>
</div>
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

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20foo(num%3A%20Option%3Ci32%3E)%20-%3E%20Option%3Ci32%3E%20%7B%0A%20%20%20%20num.map(%7Cnum%7C%20num%20*%202)%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20assert_eq!(foo(None)%2C%20None)%3B%0A%20%20%20%20assert_eq!(foo(Some(2))%2C%20Some(4))%3B%0A%7D%0A"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-5').innerText)">
            <div class="hidden aria-hidden" id='cbcp-5'>fn foo(num: Option<i32>) -> Option<i32> {
    num.map(|num| num * 2)
}

fn main() {
    assert_eq!(foo(None), None);
    assert_eq!(foo(Some(2)), Some(4));
}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">foo</span>(num: <span class="hljs-type">Option</span>&lt;<span class="hljs-type">i32</span>&gt;) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Option</span>&lt;<span class="hljs-type">i32</span>&gt; {
    num.<span class="hljs-title function_ invoke__">map</span>(|num| num * <span class="hljs-number">2</span>)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-built_in">assert_eq!</span>(<span class="hljs-title function_ invoke__">foo</span>(<span class="hljs-literal">None</span>), <span class="hljs-literal">None</span>);
    <span class="hljs-built_in">assert_eq!</span>(<span class="hljs-title function_ invoke__">foo</span>(<span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">2</span>)), <span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">4</span>));
}
</code></pre>
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

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=trait%20Legged%20%7B%0A%20%20%20%20fn%20legs(%26self)%20-%3E%20u64%3B%0A%7D%0A%0Astruct%20Table%20%7B%0A%20%20%20%20legs%3A%20u64%2C%0A%7D%0A%0Astruct%20Chair%3B%0A%0Aimpl%20Legged%20for%20Table%20%7B%0A%20%20%20%20fn%20legs(%26self)%20-%3E%20u64%20%7B%0A%20%20%20%20%20%20%20%20self.legs%0A%20%20%20%20%7D%0A%7D%0A%0Aimpl%20Legged%20for%20Chair%20%7B%0A%20%20%20%20fn%20legs(%26self)%20-%3E%20u64%20%7B%0A%20%20%20%20%20%20%20%204%0A%20%20%20%20%7D%0A%7D%0A%0A%2F%2F%20This%20function%20takes%20in%20any%20L%20such%20that%20L%20implements%20Legged.%0Afn%20has_more_than_3_legs%3CL%3A%20Legged%3E(legged%3A%20L)%20-%3E%20bool%20%7B%0A%20%20%20%20legged.legs()%20%3E%203%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20assert!(has_more_than_3_legs(Chair))%3B%0A%20%20%20%20assert!(!has_more_than_3_legs(Table%20%7B%20legs%3A%203%20%7D))%0A%7D%0A"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-6').innerText)">
            <div class="hidden aria-hidden" id='cbcp-6'>trait Legged {
    fn legs(&self) -> u64;
}

struct Table {
    legs: u64,
}

struct Chair;

impl Legged for Table {
    fn legs(&self) -> u64 {
        self.legs
    }
}

impl Legged for Chair {
    fn legs(&self) -> u64 {
        4
    }
}

// This function takes in any L such that L implements Legged.
fn has_more_than_3_legs<L: Legged>(legged: L) -> bool {
    legged.legs() > 3
}

fn main() {
    assert!(has_more_than_3_legs(Chair));
    assert!(!has_more_than_3_legs(Table { legs: 3 }))
}
</div>
            copy
        </button>
    </span>
</div>
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
<p>In the above example, the function <code>has_more_than_3_legs</code> has a simple generic bound, but typeclasses let us express
much more complex bounds.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=use%20std%3A%3Aops%3A%3AAdd%3B%0Ause%20std%3A%3Afmt%3A%3ADisplay%3B%0A%0Afn%20double_and_print%3CT%3A%20Add%3COutput%20%3D%20T%3E%20%2B%20Display%20%2B%20Clone%3E(val%3A%20T)%20%7B%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val.clone()%20%2B%20val)%0A%7D%0A%0Afn%20main()%20%7B%0A%20%20%20%20double_and_print(2)%3B%20%2F%2F%20prints%20%224%22%0A%7D%0A"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-7').innerText)">
            <div class="hidden aria-hidden" id='cbcp-7'>use std::ops::Add;
use std::fmt::Display;

fn double_and_print<T: Add<Output = T> + Display + Clone>(val: T) {
    println!("{}", val.clone() + val)
}

fn main() {
    double_and_print(2); // prints "4"
}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">use</span> std::ops::Add;
<span class="hljs-keyword">use</span> std::fmt::Display;

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">double_and_print</span>&lt;T: Add&lt;Output = T&gt; + Display + <span class="hljs-built_in">Clone</span>&gt;(val: T) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, val.<span class="hljs-title function_ invoke__">clone</span>() + val)
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() {
    <span class="hljs-title function_ invoke__">double_and_print</span>(<span class="hljs-number">2</span>); <span class="hljs-comment">// prints &quot;4&quot;</span>
}
</code></pre>
<p>There are also alternative syntaxes to specify bounds.
For longer bounds like that of <code>double_and_print</code>, we can use the <code>where</code> keyword to specify the bounds after the arguments.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-8').innerText)">
            <div class="hidden aria-hidden" id='cbcp-8'>fn double_and_print<T>(val: T)
where
    T: Add<Output = T> + Display + Clone
{
    println!("{}", val.clone() + val)
}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">double_and_print</span>&lt;T&gt;(val: T)
<span class="hljs-keyword">where</span>
    T: Add&lt;Output = T&gt; + Display + <span class="hljs-built_in">Clone</span>
{
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{}&quot;</span>, val.<span class="hljs-title function_ invoke__">clone</span>() + val)
}
</code></pre>
<p>For shorter bounds, we can use the <code>impl</code> keyword inside the arguments themselves, but this would prevent us from specifying
the generic type(s) if type inference falls short.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-9').innerText)">
            <div class="hidden aria-hidden" id='cbcp-9'>fn debug(val: impl Display) {
    println!("{val}")
}
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">fn</span> <span class="hljs-title function_">debug</span>(val: <span class="hljs-keyword">impl</span> <span class="hljs-title class_">Display</span>) {
    <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{val}&quot;</span>)
}
</code></pre>
<p>Rust has a lot of small conveniences like this, making it both flexible and pleasant to use.</p>
<p>You can also use dynamic dispatch to make a &quot;trait object&quot; type.</p>
<p>It should be noted that trait objects are unsized as different implementors of the trait may have different sizes.<br>
As such, we put them on the heap using the <code>Box</code> smart pointer and store them in a heap-allocated <code>Vec</code>.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20use%20std%3A%3Afmt%3A%3ADebug%3B%0A%20%20%20%20%0A%20%20%20%20let%20vec%3A%20Vec%3CBox%3Cdyn%20Debug%3E%3E%20%3D%20vec!%5B%0A%20%20%20%20%20%20%20%20Box%3A%3Anew(1)%2C%0A%20%20%20%20%20%20%20%20Box%3A%3Anew(Some(3))%2C%20%0A%20%20%20%20%20%20%20%20Box%3A%3Anew(%22test%22)%0A%20%20%20%20%5D%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7Bvec%3A%3F%7D%22)%0A%20%20%20%20%0A%7D"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-10').innerText)">
            <div class="hidden aria-hidden" id='cbcp-10'>use std::fmt::Debug;

let vec: Vec<Box<dyn Debug>> = vec![
    Box::new(1),
    Box::new(Some(3)), 
    Box::new("test")
];

println!("{vec:?}")
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-keyword">use</span> std::fmt::<span class="hljs-built_in">Debug</span>;

<span class="hljs-keyword">let</span> <span class="hljs-variable">vec</span>: <span class="hljs-type">Vec</span>&lt;<span class="hljs-type">Box</span>&lt;<span class="hljs-keyword">dyn</span> <span class="hljs-built_in">Debug</span>&gt;&gt; = <span class="hljs-built_in">vec!</span>[
    <span class="hljs-type">Box</span>::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-number">1</span>),
    <span class="hljs-type">Box</span>::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-title function_ invoke__">Some</span>(<span class="hljs-number">3</span>)), 
    <span class="hljs-type">Box</span>::<span class="hljs-title function_ invoke__">new</span>(<span class="hljs-string">&quot;test&quot;</span>)
];

<span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{vec:?}&quot;</span>)
</code></pre>
<h2 id="iterators" tabindex="-1"><a class="header-anchor" href="#iterators" aria-hidden="true" target="_self">#</a> Iterators</h2>
<p>Iterators are by far my favourite feature of Rust, utilizing its powerful type system
to create a concise and easy way of manipulating data.</p>
<p>Most collection types in Rust either have an <code>iter</code> method or implement <code>IntoIterator</code>,
which creates an <code>Iterator</code> over them.</p>
<p>Once in an <code>Iterator</code>, you get access to a wide variety of helper methods to manipulate it
such as <code>filter</code>, <code>map</code>, <code>skip</code>, and <code>take</code> among many more.</p>
<p>Rust's <code>Iterator</code> is &quot;lazy&quot;, meaning that operations on them only run when needed.
This avoids allocating a container for each operation, which would be necessary in a strict API.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        <a href="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2F%20This%20is%20a%20bad%20use%20of%20%60map%60%2C%20%60inspect%60%20is%20more%20suitable%20here.%0A%20%20%20%20(1..%3D10).map(%7Cn%7C%20println!(%22%7Bn%7D%22)).take(3).for_each(drop)%3B%0A%20%20%20%20%2F%2F%20By%20the%20end%20of%20the%20statement%20above%2C%0A%20%20%20%20%2F%2F%20we'd%20have%20printed%3A%0A%20%20%20%20%2F%2F%20next%201%0A%20%20%20%20%2F%2F%20next%202%0A%20%20%20%20%2F%2F%20next%203%0A%20%20%20%20%0A%7D"" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-11').innerText)">
            <div class="hidden aria-hidden" id='cbcp-11'>// This is a bad use of \`map\`, \`inspect\` is more suitable here.
(1..=10).map(|n| println!("{n}")).take(3).for_each(drop);
// By the end of the statement above,
// we'd have printed:
// next 1
// next 2
// next 3
</div>
            copy
        </button>
    </span>
</div>
<pre class="hljs codeblock"><code><span class="hljs-comment">// This is a bad use of \`map\`, \`inspect\` is more suitable here.</span>
(<span class="hljs-number">1</span>..=<span class="hljs-number">10</span>).<span class="hljs-title function_ invoke__">map</span>(|n| <span class="hljs-built_in">println!</span>(<span class="hljs-string">&quot;{n}&quot;</span>)).<span class="hljs-title function_ invoke__">take</span>(<span class="hljs-number">3</span>).<span class="hljs-title function_ invoke__">for_each</span>(drop);
<span class="hljs-comment">// By the end of the statement above,</span>
<span class="hljs-comment">// we&#x27;d have printed:</span>
<span class="hljs-comment">// next 1</span>
<span class="hljs-comment">// next 2</span>
<span class="hljs-comment">// next 3</span>
</code></pre>
<p>Notice how we only printed &quot;next&quot; three times, despite the <code>inspect</code> taking place before <code>take</code>.</p>
<p>The <code>Iterator</code> we produced is equivalent to the following imperative code.</p>

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>Rust</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-12').innerText)">
            <div class="hidden aria-hidden" id='cbcp-12'>let mut count = 0;
for n in (1..=10) {
    // Shadowing the binding of \`n\` to the result of the map.
    let n = println!("{n}");

    count += 1;
    if count >= 3 {
        break
    }

    // inner loop
}
</div>
            copy
        </button>
    </span>
</div>
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

<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-70 w-min">
        <b>JavaScript</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        
        
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('cbcp-13').innerText)">
            <div class="hidden aria-hidden" id='cbcp-13'>let mapped = [];

for (n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    mapped.push(console.log(n));
}

let taken = mapped.slice(0, 3);

for (n of taken) {
    // inner loop
}
</div>
            copy
        </button>
    </span>
</div>
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
`;export{n as default};
