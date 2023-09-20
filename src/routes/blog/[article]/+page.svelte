<script lang="ts">
    import { page } from "$app/stores";
    import Markdown from "$lib/components/Markdown.svelte";
    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
    import { onMount } from "svelte";
    import Fa from "svelte-fa";
    import { mobile } from "fractils";

    let post: string | null = null;
    let id: string | null = null;

    let mounted = false;

    onMount(async () => {
        id = $page.params.article;
        post = await fetch(`/articles/${id}.md`).then((res) =>
            res.ok ? res.text() : Promise.resolve(null)
        );
        mounted = true;
    });
</script>

<svelte:head>
    {#if mounted && post !== null}
        <title>
            {post.substring(0, post.indexOf("\n")).replace(/^#+ /, "")}
        </title>
    {/if}
</svelte:head>

<div
    class="top-0 mt-16"
    class:fixed={!$mobile}
    class:ml-8={!$mobile}
    class:centered-content={$mobile}
>
    <a href="/blog" class="no-underline">
        <Fa icon={faArrowLeft} class="inline mr-1" /><b>Index</b>
    </a>
</div>

{#if mounted && post !== null}
    <div class="mb-12">
        <Markdown markdown={post} />
    </div>
{/if}

{#if $mobile}
    <style>
        .codeblock {
            max-height: 16rem;
        }
    </style>
{/if}
