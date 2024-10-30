<script lang="ts">
    import '../app.postcss'
    import Fa from 'svelte-fa'
    import { faSun, faMoon, faHome } from '@fortawesome/free-solid-svg-icons'
    import { faGithub } from '@fortawesome/free-brands-svg-icons'

    import { theme } from '$lib/stores'
    import { onMount } from 'svelte'
    import { Fractils, mobile, mobileThreshold } from 'fractils'
    import { onNavigate } from '$app/navigation'
    import { Svrollbar } from 'svrollbar'
    interface Props {
        children?: import('svelte').Snippet<[unknown]>
    }

    let { children }: Props = $props()

    mobileThreshold.set(1000)
    let themeToggle: HTMLButtonElement | undefined = $state()
    let mounted = $state(false)
    let rem = $state(16)

    onMount(() => {
        rem = parseInt(getComputedStyle(document.documentElement).fontSize)
        themeToggle!.disabled = false

        if (
            localStorage.theme === 'light' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: light)').matches)
        ) {
            theme.set('light')
        } else {
            theme.set('dark')
        }

        theme.subscribe((theme) => {
            if (theme === 'light') {
                document.documentElement.classList.remove('dark')
                document.documentElement.style.setProperty(
                    'color-scheme',
                    'light'
                )
                localStorage.theme = 'light'
            } else {
                document.documentElement.classList.add('dark')
                document.documentElement.style.setProperty(
                    'color-scheme',
                    'dark'
                )
                localStorage.theme = 'dark'
            }
        })
        mounted = true
    })

    onNavigate((navigation) => {
        if (!document.startViewTransition) return

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve()
                await navigation.complete
            })
        })
    })
</script>

<Fractils />

<nav class="h-12 py-2 mb-8 bg-gray-800 text-white flex fixed w-full top-0 z-50">
    <ul>
        <!-- left -->
        <li>
            <ul>
                <li>
                    <a href="/" class="text-lg no-underline" title="Home">
                        <Fa icon={faHome} class="inline" />
                        {#if !mounted || !$mobile}
                            Home
                        {/if}
                    </a>
                </li>

                <li>
                    <a
                        href="/portfolio"
                        class="text-lg no-underline"
                        title="Portfolio"
                    >
                        Portfolio
                    </a>
                </li>

                <li>
                    <a href="/blog" class="text-lg no-underline" title="Blog"
                        >Blog</a
                    >
                </li>
            </ul>
        </li>

        <!-- right -->
        <li>
            <ul>
                <li>
                    <a
                        href="https://github.com/Vonr"
                        target="_blank"
                        class="noblue notransition"
                        title="GitHub"
                    >
                        <Fa icon={faGithub} size="2x" class="py-1 w-6" />
                    </a>
                </li>
                <li>
                    <button
                        onclick={() => {
                            theme.update((theme) =>
                                theme === 'light' ? 'dark' : 'light'
                            )
                        }}
                        title={$theme === 'light'
                            ? 'Switch to Dark Mode'
                            : 'Switch to Light Mode'}
                        disabled={true}
                        bind:this={themeToggle}
                        class="disabled:opacity-50"
                    >
                        <Fa
                            icon={$theme === 'light' ? faSun : faMoon}
                            size="2x"
                            class="py-1 w-6"
                        />
                    </button>
                </li>
            </ul>
        </li>
    </ul>
</nav>

<Svrollbar
    initiallyVisible={true}
    margin={{
        top: 3 * rem,
    }}
/>

<div class="my-16 text-lg content">
    {@render children?.({ class: 'bg-white dark:bg-black' })}
</div>

{#if $theme === 'light'}
    <style>
        h1:not(.no-hl),
        h2:not(.no-hl),
        h3:not(.no-hl) {
            color: #076678;
        }
    </style>
{:else}
    <style>
        h1:not(.no-hl),
        h2:not(.no-hl),
        h3:not(.no-hl) {
            color: #83a598;
        }
    </style>
{/if}

<style>
    nav ul {
        display: flex;
        width: 100%;
        flex-flow: row nowrap;
        justify-content: space-between;
        text-align: center;
        margin-left: 1rem;
        margin-right: 2rem;
    }

    nav > ul > li > ul > li {
        flex-flow: row nowrap;
    }
</style>
