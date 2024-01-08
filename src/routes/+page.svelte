<script>
    import Repo from '$lib/components/Repo.svelte'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'
    import Fa from 'svelte-fa'
</script>

<svelte:head>
    <title>Home</title>
    <meta content="Qther's Site" property="og:title" />
    <meta content="https://vonr.github.io/" property="og:url" />
</svelte:head>

<div class="centered-content">
    <h1>Welcome to my website!</h1>

    <p>I'm Qther, an aspiring software engineer mostly programming in Rust.</p>
    <p>
        This website (<Repo
            repo="vonr.github.io"
            displayName="Source"
            showStars={false}
        />) is made with Svelte and will host a small
        <a href="/portfolio" target="_blank">portfolio</a>
        of some of my projects as well as some
        <a href="/blog" target="_blank">blog posts</a>
        written in my free time.
    </p>
    <p>
        You can find me on <a href="https://github.com/Vonr" target="_blank"
            ><Fa
                icon={faGithub}
                class="inline text-black dark:text-white"
            />GitHub</a
        >.
    </p>
</div>
