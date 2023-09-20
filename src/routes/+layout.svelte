<script>
    import "../app.css";
    import Fa from "svelte-fa";
    import { faSun, faMoon, faHome } from "@fortawesome/free-solid-svg-icons";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";

    import { theme } from "$lib/stores";
    import { onMount } from "svelte";
    import { Fractils, mobile } from "fractils";

    let mounted = false;

    onMount(() => {
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
        mounted = true;
    });
</script>

<Fractils />

{#if mounted}
    <nav class="h-12 py-2 mb-8 bg-gray-800 text-white flex fixed w-full top-0">
        <ul>
            <!-- left -->
            <li>
                <ul>
                    <li>
                        <a href="/" class="text-lg no-underline">
                            <Fa icon={faHome} class="inline" />
                            {#if !$mobile}
                                Home
                            {/if}
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio" class="text-lg no-underline">
                            Portfolio
                        </a>
                    </li>

                    <li>
                        <a href="/blog" class="text-lg no-underline">Blog</a>
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

    <div class="mt-16 text-lg">
        <slot class="bg-white dark:bg-black" />
    </div>
{/if}

{#if $mobile}
    <style>
        nav ul {
            margin-left: 0.25rem;
            margin-right: 0.25rem;
        }
    </style>
{:else}
    <style>
        nav ul {
            margin-left: 2rem;
            margin-right: 2rem;
        }
    </style>
{/if}

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
    }

    nav > ul > li > ul > li {
        width: 100%;
        margin-left: 1rem;
        margin-right: 1rem;
        flex-flow: row nowrap;
    }
</style>
