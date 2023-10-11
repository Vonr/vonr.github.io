<script lang="ts">
    import "../app.postcss";
    import Fa from "svelte-fa";
    import { faSun, faMoon, faHome } from "@fortawesome/free-solid-svg-icons";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";

    import { theme } from "$lib/stores";
    import { onMount } from "svelte";
    import { Fractils, mobile, mobileThreshold } from "fractils";
    import { onNavigate } from "$app/navigation";

    mobileThreshold.set(1000);
    let themeToggle: HTMLButtonElement;

    onMount(() => {
        themeToggle.disabled = false;

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            theme.set("dark");
        } else {
            theme.set("light");
        }

        theme.subscribe((theme) => {
            if (theme === "light") {
                document.documentElement.classList.remove("dark");
                document.documentElement.style.setProperty(
                    "color-scheme",
                    "light"
                );
                localStorage.theme = "light";
            } else {
                document.documentElement.classList.add("dark");
                document.documentElement.style.setProperty(
                    "color-scheme",
                    "dark"
                );
                localStorage.theme = "dark";
            }
        });
    });

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
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
                        {#if !$mobile}
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
                        on:click={() => {
                            theme.update((theme) =>
                                theme === "light" ? "dark" : "light"
                            );
                        }}
                        title={$theme === "light"
                            ? "Switch to Dark Mode"
                            : "Switch to Light Mode"}
                        disabled={true}
                        bind:this={themeToggle}
                        class="disabled:opacity-50"
                    >
                        <Fa
                            icon={$theme === "light" ? faSun : faMoon}
                            size="2x"
                            class="py-1 w-6"
                        />
                    </button>
                </li>
            </ul>
        </li>
    </ul>
</nav>

<div class="fixed bottom-0 right-0 p-8">
    <a href="https://ko-fi.com/qther" target="_blank">
        <img
            src="/logos/kofi.png"
            alt="Support me on Ko-fi"
            class="h-16 w-16"
        />
    </a>
</div>

<div class="mt-16 text-lg">
    <slot class="bg-white dark:bg-black" />
</div>

{#if $theme === "light"}
    <style>
        h1:not(.no-hl),
        h2:not(.no-hl),
        h3:not(.no-hl) {
            color: #076678;
        }

        .text-col {
            color: black;
        }
    </style>
{:else}
    <style>
        h1:not(.no-hl),
        h2:not(.no-hl),
        h3:not(.no-hl) {
            color: #83a598;
        }

        .text-col {
            color: white;
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
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }

    nav > ul > li:nth-child(1) {
        margin-left: 1rem;
    }

    nav > ul > li:nth-child(2) {
        margin-right: 1rem;
    }

    nav > ul > li > ul > li {
        flex-flow: row nowrap;
    }
</style>
