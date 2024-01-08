<script lang="ts">
    import Repo from '$lib/components/Repo.svelte'
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta content="Portfolio" property="og:title" />
    <meta content="https://vonr.github.io/portfolio" property="og:url" />
</svelte:head>

<div class="centered-content">
    <h1>Portfolio</h1>

    <p>
        Hey, I'm Qther.
        <br />
        That's an alias - as I choose not to reveal my real name for the sake of
        privacy.
        <br />
    </p>

    <p>
        I started programming with JavaScript when I was just 9 years old,
        <br />
        though I did not make anything of note until much later.
    </p>

    <p>
        Nowadays, I mostly program in Rust, as I am a big fan of its safety and
        ergonomics. Apart from binaries like
        <Repo repo="parui" />, a terminal user interface wrapper around the Arch
        User Repository (AUR) Helper paru.
    </p>
    <p>
        I have also made several libraries such
        <Repo repo="compact_strings" />
        , a more space-efficient and cache-friendly way of representing large lists
        of strings also used in parui, and
        <Repo repo="nonn" />, a wrapper around the standard library's NonZero*
        integer types to make them generically NonN instead.
    </p>

    <p>
        I use Neovim as my text editor, both for simple files and for
        programming. I host my <a href="https://github.com/Vonr/nvim">
            configuration files
        </a>
        on GitHub and have made some plugins for it, such as
        <Repo repo="align.nvim" />, though they are largely unmaintained.
    </p>
</div>
