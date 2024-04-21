# Why Rust?
# Sep 20 2023

I have used a variety of languages since I first started my programming journey.

However, despite all my time with many other languages, I often find myself 
reaching for Rust, despite all my initial troubles with picking it up.

In this post I want to explore what made it so different, as well as why I ultimately
found enjoyment in using it.

## The Borrow Checker

Rust has a system that it calls the borrow checker.  
This program is at the core of Rust, upholding its borrowing rules.

In Rust, when something is passed by value to another function, it is moved out of its original function.
This means that you can no longer access it, even after the function is over.

```rs
fn print(s: String) {
    println!("{s}")
}

fn main() {
    let s = String::from("Hello, world!");

    print(s);

    // This would be an error, as s has moved into `print`
    println!("{s}")
}
```

Of course, this by itself is inconvenient.  
That's why Rust makes heavy use of borrows - creating references to values.

References are split into two distinct types: shared and immutable, and exclusive and mutable.

Mutable references can not coexist with any other reference, regardless of mutability.

As such, you must pick between having as many immutable references to an object as needed,
or a single mutable reference.

```rs
// `print` now takes in reference to a String.
//
// P.S. the type should really be &str since
// we are only interested in the data of
// the string.
fn print(s: &String) {
    println!("{s}")
}

fn main() {
    let s = String::from("Hello, world!");

    // We give `print` a reference to `s` instead of `s` itself
    print(&s);

    // `s` has not been moved out of this function,
    // and is thus still valid.
    println!("{s}")
}
```

This rule may seem quite arbitrary at first glance, but this simple rule prevents an entire class of bugs,
such as use-after-free and double-free, which may be especially freeing for developers coming from a C or C++ background.

The borrow checker also gives Rust the ability to know when a value can be freed
statically at compile-time, making the use of a garbage collector unnecessary and
allowing the programmer to not have to worry about memory leaks.

That said, Rust also gives you the tools to free (or `drop`) a value manually as long as you have ownership of it.  
In fact, it is such a simple function you could write it yourself - no compiler magic!

```rs,ignore,docs=https://doc.rust-lang.org/std/mem/fn.drop.html
pub fn drop<T>(_x: T) {}
```

The use of the borrow checker is also not limited to preventing bugs, it also provides various guarantees to the
compiler which can make use of those guarantees to generate faster machine code - potentially providing performance
benefits.

If you wish to learn more about what the borrow checker does, I recommend reading  
[this article](https://blog.logrocket.com/introducing-the-rust-borrow-checker/) or
watching [Niko Matsakis' wonderful talk](https://www.youtube.com/watch?v=_agDeiWek8w).

## Enums (Sum Types)

The borrow checker is really neat, but one of the biggest reasons I love Rust is how
expressive the language is, in many ways thanks to its powerful enums.

If you're familiar with algebraic type systems, Rust's enums are sum types,
and those of you who know what that implies would already be excited about it.

Let's take a look at the `Option` type.
This type exists in the standard library
and is defined similarly to this.

```rs,ignore,docs=https://doc.rust-lang.org/std/option/enum.Option.html
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

As shown in the above example, another advantage is that being a type, we can attach methods such as `map` onto it.

This makes working with optional values more concise and convenient.

Rust also has a `Result` type which is similar to `Option`, replacing exceptions instead of `null`.
You can read more about it [here](https://doc.rust-lang.org/std/result/enum.Result.html).

## Traits (Typeclasses)

If you've had experience with the ML family of languages or Haskell, you would be familiar with the concept of typeclasses.

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

In the above example, the function `has_more_than_3_legs` has a simple generic bound, but traits let us express
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

There are also alternative syntax to specify bounds.
For longer bounds like that of `double_and_print`, we can use the `where` keyword to specify the bounds after the arguments.

```rs,ignore
fn double_and_print<T>(val: T)
where
    T: Add<Output = T> + Display + Clone
{
    println!("{}", val.clone() + val)
}
```

For shorter bounds, we can use the `impl` keyword inside the arguments themselves, but this would prevent us from specifying
the generic type(s) if type inference falls short.

```rs,ignore
fn debug(val: impl Display) {
    println!("{val}")
}
```

Rust has a lot of small conveniences like this, making it both flexible and pleasant to use.

You can also use dynamic dispatch to make a "trait object" type.

It should be noted that trait objects are unsized as different implementers of the trait may have different sizes.  
As such, we need to put them behind some form of indirection - such as a `Box`, in order to store them.

```rs,nomain
use std::fmt::Debug;

let vec: Vec<Box<dyn Debug>> = vec![
    Box::new(1),
    Box::new(Some(3)), 
    Box::new("test")
];

println!("{vec:?}")
```

## Iterators

Iterators are another very powerful feature of Rust, utilizing its powerful type system
to create a concise, easy, and efficient way of manipulating data.

Most collection types in Rust either have an `iter` method or implement `IntoIterator`,
which creates an `Iterator` over them.

Once in an `Iterator`, you get access to a wide variety of helper methods to manipulate it
such as `filter`, `map`, `skip`, and `take` among many more.

Rust's `Iterator` is "lazy", meaning that operations on them only run when needed.
This avoids allocating a container for each operation, which would be necessary in a strict API.

```rs,nomain
// This is a bad use of `map`, `inspect` is more suitable here.
(1..=10).map(|n| println!("{n}")).take(3).for_each(drop);
// By the end of the statement above,
// we'd have printed:
// next 1
// next 2
// next 3
```

Notice how we only printed "next" three times, despite the `inspect` taking place before `take`.

The `Iterator` we produced is equivalent to the following imperative code.

```rs,nomain
let mut count = 0;
for n in 1..=10 {
    // Shadowing the binding of `n` to the result of the map.
    let n = println!("{n}");

    count += 1;
    if count >= 3 {
        break
    }

    // inner loop
}
```

While doing the same in JavaScript would lead to the equivalent of the following instead,
not only unexpectedly printing all 10 numbers, but also allocating two new arrays.

```js
let mapped = [];

for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    mapped.push(console.log(n));
}

let taken = mapped.slice(0, 3);

for (const n of taken) {
    // inner loop
}
```

In my experience, I have never encountered a situation where I'd rather have a strict API here,
and Rust's lack of container allocations makes it the better option for me.

## Conclusion

I have only discussed a small portion of the reasons that I love using Rust, but the
reasons I have discussed are the primary reasons why I continue to choose Rust for
many of my projects.

With all that said, I believe it is worth nothing that Rust is neither a perfect language
nor a language that should be used for everything.

In fact, I considered writing this website in Rust for fun, but decided against it in the
end as I would be losing out on the fantastic JavaScript ecosystem which could help
me push out this website faster.

I believe that Rust deserves a spot on your tool-belt, so that you can easily
harness it's powers when it fits the project. I personally make a lot of
command-line utilities, which I believe Rust to be an excellent choice for.

If you are interested in learning Rust, I strongly recommend reading the [Book](https://doc.rust-lang.org/book)
or doing [Rustlings exercises](https://github.com/rust-lang/rustlings).
