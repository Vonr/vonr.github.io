<script lang="ts">
    import "./markdown.css";
    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { mobile } from "fractils";
    import { theme } from "$lib/stores";
    import type { PageData } from "./$types";
    import lightTheme from "$lib/styles/hljs-gruvbox-light-medium.css?inline";
    import darkTheme from "$lib/styles/hljs-gruvbox-dark-medium.css?inline";
    import { onMount } from "svelte";

    let style: string;
    export let data: PageData;
    let post = data.post;

    theme.subscribe(async (theme) => {
        if (theme === "light") {
            style = lightTheme;
        } else {
            style = darkTheme;
        }
    });

    let mounted = false;
    onMount(() => (mounted = true));
</script>

<svelte:head>
    <title>
        {post.substring(0, post.indexOf("\n")).replace(/<[^>]*>?/gm, "")}
    </title>
</svelte:head>

<div
    class="top-0 mt-16"
    class:fixed={!mounted || !$mobile}
    class:ml-8={!mounted || !$mobile}
    class:centered-content={mounted && $mobile}
>
    <a href="/blog" class="no-underline">
        <Fa icon={faArrowLeft} class="inline mr-1" /><b>Index</b>
    </a>
</div>

{@html `<style>${style}</style>`}

<div class="centered-content pb-8">
    {@html post}
</div>

{#if mounted && $mobile}
    <style>
        .codeblock {
            max-height: 16rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }
    </style>
{/if}
