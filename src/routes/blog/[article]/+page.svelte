<script lang="ts">
    /* eslint-disable svelte/no-at-html-tags */

    import './markdown.css'
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa'
    import { mobile } from 'fractils'
    import type { PageData } from './$types'
    import { onMount } from 'svelte'
    import { page } from '$app/state'
    import { theme } from '$lib/stores'

    interface Props {
        data: PageData
    }

    let { data }: Props = $props()
    let post = data.post
    let postName = post
        .substring(0, post.indexOf('\n'))
        .replace(/<[^>]*>?/gm, '')

    let mounted = $state(false)
    onMount(() => {
        const diagrams = document.querySelectorAll('diagram')
        theme.subscribe((theme) => {
            for (const diagram of diagrams) {
                for (const img of diagram.querySelectorAll('img')) {
                    img.src = img.src.replace(
                        theme === 'light' ? 'dark' : 'light',
                        theme as string
                    )
                }
            }
        })

        mounted = true
    })
</script>

<svelte:head>
    <title>
        {postName}
    </title>
    <meta content={postName} property="og:title" />
    <meta content={page.url.href} property="og:url" />
</svelte:head>

<div
    class="top-0 mt-16 text-black dark:text-white"
    class:fixed={!mounted || !$mobile}
    class:ml-8={!mounted || !$mobile}
    class:centered-content={mounted && $mobile}
>
    <a href="/blog" class="no-underline">
        <Fa icon={faArrowLeft} class="inline mr-1" /><b>Index</b>
    </a>
</div>

<div class="centered-content pb-8" id="article">
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
