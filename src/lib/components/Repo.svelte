<script lang="ts">
    import Fa from 'svelte-fa'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
    import { onMount } from 'svelte'
    import type { RepoInfo } from '$lib/models/RepoInfo'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'

    export let owner = 'Vonr'
    export let repo: string
    export let displayName = repo
    export let showStars = true

    let mounted = false
    let repoInfo: RepoInfo

    onMount(async () => {
        if (showStars) {
            repoInfo = await fetch(
                `https://api.github.com/repos/${owner}/${repo}`,
                {
                    headers: {
                        Accept: 'application/vnd.github+json',
                        'X-GitHub-Api-Version': '2022-11-28',
                    },
                }
            )
                .then((res) => res.json())
                .then((ri) => ri as RepoInfo)
        }

        mounted = true
    })
</script>

<span class="bg-indigo-100 dark:bg-gray-700 text-black dark:text-white">
    <a href={`https://github.com/${owner}/${repo}`} target="_blank">
        <Fa
            icon={faGithub}
            class="inline text-black dark:text-white mr-0.5"
        />{displayName}
    </a>
    {#if mounted && showStars && repoInfo.stargazers_count > 0}
        <a
            href={`${repoInfo.html_url}/stargazers`}
            target="_blank"
            class="noblue no-underline"
        >
            <Fa
                icon={faStar}
                class="inline"
                color="#ddb14e"
            />{repoInfo.stargazers_count}
        </a>
    {/if}
</span>
