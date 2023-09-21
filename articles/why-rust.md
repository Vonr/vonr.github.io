# Why Rust?
## Sep 20 2023

I have used a variety of languages since I first started my foray into programming.

I started with Javascript, learnt Java, hopped to Kotlin, pivoted to Go, and touched on a bunch of other languages along the way.

Despite all my time with these other languages, I find myself routinely reaching for Rust
for whatever I am working on.

Rust was a language that I had a lot of trouble picking up.  
I attempted learning it 8 times before it finally clicked.  
What made it so different, and why do I enjoy it?

## The Borrow Checker

Rust has a system that it calls the borrow checker.  
This program is at the core of Rust, upholding its borrowing rules.

In Rust, when something is passed by value to another function, it is moved out of its original function.
This means that you can no longer access it, even after the function is over.

```rs
fn main() {
    let s = String::from("Hello, world!");

    print(s);

    // This would be an error, as s has moved into `print`
    println!("{s}")
}

fn print(s: String) {
    println!("{s}")
}
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=4cd8bcc42a9e27c8a287a0295b68a362)

Of course, this by itself is inconvenient.  
That's why Rust makes heavy use of borrows - creating references to values.

References are split into two distinct types: shared and immutable, and exclusive and mutable.

Mutable references can not coexist with any other reference, regardless of mutability.

As such, you must pick between having as many immutable references to an object as needed,
or a single mutable reference.

```rs
fn main() {
    let s = String::from("Hello, world!");

    // We give `print` a reference to `s` instead of `s` itself
    print(&s);

    // `s` has not been moved out of this function,
    // and is thus still valid.
    println!("{s}")
}

// `print` now takes in reference to a String.
//
// P.S. the type should really be &str since
// we are only interested in the data of
// the string.
fn print(s: &String) {
    println!("{s}")
}
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=d1c040196f4c5a11c920ad0c9a2874a6)

This rule may seem quite arbitrary at first glance, but this simple rule prevents an entire class of bugs,
such as use-after-free and double-free, which may be especially freeing for developers coming from a C or C++ background.

The borrow checker also gives Rust the ability to know when a value can be freed
statically at compile-time, making the use of a garbage collector unnecessary and
allowing the programmer to not have to worry about memory leaks.

That said, Rust also gives you the tools to free (or `drop`) a value manually as long as you have ownership of it.  
In fact, it is such a simple function you could write it yourself - no compiler magic!

```rs
pub fn drop<T>(_x: T) {}
```
[Docs](https://doc.rust-lang.org/std/mem/fn.drop.html)

If you wish to learn more about what the borrow checker does, I recommend reading  
[this article](https://blog.logrocket.com/introducing-the-rust-borrow-checker/).

## Enums (Sum Types)

The borrow checker is really neat, but one of the biggest reasons I love Rust is how
expressive the language is, in many ways thanks to its powerful enums.

If you're familiar with algebraic type systems, Rust's enums are sum types,
and those of you who know what that implies would already be excited about it.

Let's take a look at the `Option` type.
This type exists in the [standard library](https://doc.rust-lang.org/std/option/enum.Option.html)
and is defined similarly to this.

```rs
enum Option<T> {
    Some(T),
    None,
}
```

It replaces the `null`s and `nil`s of other languages and is analogous to the `Maybe` type in Haskell.

The most obvious advantage of using a sum type to represent "nullable" values is that they are typed, unlike `null`s in
a few other languages such as Java, where you can pass a `null` for any argument.

In Rust, you would have to explicitly write that what you are expecting is an `Option`.  
If you don't, you will simply get a compile error.

```rs
fn foo(num: Option<i32>) -> Option<i32> {
    num.map(|num| num * 2)
}

fn main() {
    assert_eq!(foo(None), None);
    assert_eq!(foo(Some(2)), Some(4));
}
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=89255fd5cb5ab72b62c8ff772e599acc)

As shown in the above example, another advantage is that being a type, we can attach methods such as `map` onto it.

This makes working with optional values more concise and convenient.

Rust also has a `Result` type which is very similar to `Option`, replacing exceptions instead of `null`.
You can read more about it [here](https://doc.rust-lang.org/std/result/enum.Result.html).

## Traits (Typeclasses)

If you've had experience with the ML family of langauges or Haskell, you would be familiar with the concept of typeclasses.

Rust was influenced by Haskell's typeclasses, resulting in traits.

Traits allow us to compartmentalize behaviour into interface-like structures.

We can implement any number of traits for an enum or struct.  
We can also implement foreign traits for our own types, or our own traits for foreign types.

```rs
trait Legged {
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
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=0c7470eeff0dd17b784d38d27eb75507)

In the above example, the function `has_more_than_3_legs` has a simple generic bound, but typeclasses let us express
much more complex bounds.

```rs
use std::ops::Add;
use std::fmt::Display;

fn double_and_print<T: Add<Output = T> + Display + Clone>(val: T) {
    println!("{}", val.clone() + val)
}

fn main() {
    double_and_print(2); // prints "4"
}
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=ccf2621556e0fe53957be7c9f89938db)

There are also alternative syntaxes to specify bounds.
For longer bounds like that of `double_and_print`, we can use the `where` keyword to specify the bounds after the arguments.

```rs
fn double_and_print<T>(val: T)
where
    T: Add<Output = T> + Display + Clone
{
    println!("{}", val.clone() + val)
}
```

For shorter bounds, we can use the `impl` keyword inside the arguments themselves, but this would prevent us from specifying
the generic type(s) if type inference falls short.

```rs
fn debug(val: impl Display) {
    println!("{val}")
}
```

Rust has a lot of small conveniences like this, making it both flexible and pleasant to use.

You can also use dynamic dispatch to make a "trait object" type.

It should be noted that trait objects are unsized as different implementors of the trait may have different sizes.  
As such, we put them on the heap using the `Box` smart pointer and store them in a heap-allocated `Vec`.

```rs
use std::fmt::Debug;

fn main() {
    let vec: Vec<Box<dyn Debug>> = vec![
        Box::new(1),
        Box::new(Some(3)), 
        Box::new("test")
    ];
    
    println!("{vec:?}")
}
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=05af188547fe84ba81c0aae62f8e2373)

## Iterators

Iterators are by far my favourite feature of Rust, utilizing its powerful type system
to create a concise and easy way of manipulating data.

Most collection types in Rust either have an `iter` method or implement `IntoIterator`,
which craetes an `Iterator` over them.

Once in an `Iterator`, you get access to a wide variety of helper methods to manipulate it
such as `filter`, `map`, `skip`, and `take` among many more.

Rust's `Iterator` is "lazy", meaning that operations on them only run when needed.
This avoids allocating a container for each operation, which would be necessary in a strict API.

```rs
fn main() {
    // This is a bad use of `map`, `inspect` is more suitable here.
    for _ in (1..=10).map(|n| println!("{n}")).take(3) {
        // Draining the iterator, as it would
        // otherwise be lazy and do nothing.
    }
    // By the end of the loop,
    // we'd have printed
    // next 1
    // next 2
    // next 3
}
```
[Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&gist=b9b5ff8b9c9b56e5bb6224efba7eae19)

Notice how we only printed "next" three times, despite the `inspect` taking place before `take`.

The `Iterator` we produced is equivalent to the following imperative code.

```rs
let mut count = 0;
for n in (1..=10) {
    // Shadowing the binding of `n` to the result of the map.
    let n = println!("{n}");

    count += 1;
    if count >= 3 {
        break
    }

    // inner loop
}
```

While doing the same in Javascript would lead to the equivalent of the following instead,
not only unexpectedly printing all 10 numbers, but also allocating two new arrays.

```js
let mapped = [];

for (n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    mapped.push(console.log(n));
}

let taken = mapped.slice(0, 3);

for (n of taken) {
    // inner loop
}
```

In my experience, I have never encountered a situation where I'd rather have a strict API here,
and Rust's lack of container allocations makes it the better option for me.

# Conclusion

I have only discussed a small portion of the reasons that I love using Rust, but the
reasons I have discussed are the primary reasons why I continue to choose Rust for
many of my projects.

With all that said, I believe it is worth nothing that Rust is neither a perfect langauge
nor a language that should be used for everything.

In fact, I considered writing this website in Rust for fun, but decided against it in the
end as I would be losing out on the fantastic Javascript ecosystem which could help
me push out this website faster.

I believe that Rust deserves a spot on your toolbelt, so that you can easily
harness it's powers when it fits the project. I personally make a lot of
command-line utilities, which I believe Rust to be an excellent choice for.

If you are interested in learning Rust, I strongly recommend reading the [Book](https://doc.rust-lang.org/book)
or doing [Rustlings exercises](https://github.com/rust-lang/rustlings).
