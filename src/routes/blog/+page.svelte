<script lang="ts">
    import indexFile from '$lib/article-index?raw'
    let index: string[][] = $state([])

    index = indexFile
        .split('\n')
        .map((entry) => entry.split('|||'))
        .filter((entry) => entry.length === 4)
        .sort((a, b) => Date.parse(b[2]) - Date.parse(a[2]))
</script>

<svelte:head>
    <title>Blog Index</title>
    <meta content="Blog Index" property="og:title" />
    <meta content="https://vonr.github.io/blog" property="og:url" />
</svelte:head>

<div class="centered-content">
    <div class="flex justify-between">
        <h1 class="inline">Blog Posts</h1>
        <span>
            <a href="/blog/feed.rss" target="_blank">rss</a>
            <a href="/blog/feed.json" target="_blank">json</a>
            <a href="/blog/feed.atom" target="_blank">atom</a>
        </span>
    </div>
    <ul class="text-lg">
        {#if index === null || index.length === 0}
            No blog posts yet.
        {:else}
            {#each index as [id, title, date]}
                <li>
                    <a href={`/blog/${id}`} class="no-underline noblue">
                        <div
                            class="bg-blue-200 dark:bg-gray-700 h-30 w-full whitespace-nowrap rounded-md px-6 py-4 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 border-2 border-transparent hover:border-blue-300 mb-3"
                        >
                            <h1
                                class="mb-0 p-0 no-hl text-black dark:text-white"
                            >
                                {title}
                            </h1>
                            <br />
                            <date datetime={date} class="text-col">
                                {date}
                            </date>
                        </div>
                    </a>
                </li>
            {/each}
        {/if}
    </ul>
</div>
