<script lang="ts">
    import { theme } from "$lib/stores";
    import MarkdownIt from "markdown-it";
    import hljs from "highlight.js";
    import Rust from "highlight.js/lib/languages/rust";
    import "./Markdown.css";
    import { md as mdStore } from "$lib/stores";

    export let markdown: string;
    let style: string;

    theme.subscribe(async (theme) => {
        if (theme === "light") {
            style = (
                await import("$lib/styles/hljs-gruvbox-light-medium.css?inline")
            ).default;
        } else {
            style = (
                await import("$lib/styles/hljs-gruvbox-dark-medium.css?inline")
            ).default;
        }
    });

    if ($mdStore === null) {
        hljs.registerLanguage("rust", Rust);

        const md: MarkdownIt = MarkdownIt({
            highlight: (str, lang) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return `<pre class="hljs codeblock"><code>${
                            hljs.highlight(str, {
                                language: lang,
                                ignoreIllegals: true,
                            }).value
                        }</code></pre>`;
                    } catch (e) {
                        console.error(e);
                    }
                }

                return `<pre class="hljs codeblock"><code>${md.utils.escapeHtml(
                    str
                )}</code></pre>`;
            },
        });

        const linkRenderer =
            md.renderer.rules.link_open ||
            function (tokens, idx, options, _env, self) {
                return self.renderToken(tokens, idx, options);
            };

        md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
            // If you are sure other plugins can't add `target` - drop check below
            const token = tokens[idx];
            const aIndex = token.attrIndex("target");

            if (aIndex < 0) {
                token.attrPush(["target", "_blank"]);
            } else {
                token.attrs ??= [];
                token.attrs[aIndex][1] = "_blank";
            }

            return linkRenderer(tokens, idx, options, env, self);
        };

        mdStore.set(md);
    }

    const rendered = $mdStore?.render(markdown);
</script>

{@html `<style>${style}</style>`}

<div class="grid centered-content" id="markdown">
    {@html rendered}
</div>
