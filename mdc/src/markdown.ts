import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import Rust from 'highlight.js/lib/languages/rust'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItContainer from 'markdown-it-container'
import { exit } from 'node:process'
import { RenderRule } from 'markdown-it/lib/renderer'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { makeRepl } from './repl'
import { getModValue } from './util'

const _slugify = slugifyWithCounter()

if (process.argv.length < 5) {
    console.error('Arguments: <dir> <builddir> <index>')
    exit(1)
}

hljs.registerLanguage('rust', Rust)

const slugify = (s: string) =>
    _slugify(s.replaceAll(/!@#\$%\^\*\(\)\[\]'"/g, ''))

const md: MarkdownIt = MarkdownIt({
    highlight: (str, _lang) => {
        const [lang, ..._mods] = _lang.split(',')
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs codeblock"><code>${
                    hljs.highlight(str, {
                        language: lang,
                        ignoreIllegals: true,
                    }).value
                }</code></pre>`
            } catch (e) {
                console.error(e)
            }
        }

        return `<pre class="hljs codeblock"><code>${md.utils.escapeHtml(
            str
        )}</code></pre>`
    },
})
    .use(MarkdownItAnchor, {
        slugify: slugify,
        level: 2,
        permalink: MarkdownItAnchor.permalink.ariaHidden({
            placement: 'before',
            renderAttrs: (_slug, _state) => ({ target: '_self' }),
        }),
    })
    .use(MarkdownItContainer, 'diagram')

const proxy: (_: RenderRule | undefined) => RenderRule = (old) =>
    old ||
    ((tokens, idx, options, _env, self) =>
        self.renderToken(tokens, idx, options))

const link_open = proxy(md.renderer.rules.link_open)
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const aIndex = token.attrIndex('target')

    if (aIndex < 0) {
        token.attrPush(['target', '_blank'])
    }

    return link_open(tokens, idx, options, env, self)
}

{
    const fence = proxy(md.renderer.rules.fence)
    const code_block = proxy(md.renderer.rules.code_block)
    const makeRule =
        (rule: RenderRule): RenderRule =>
        (tokens, idx, options, env, self) => {
            const token = tokens[idx]
            const id = slugify('cbcp')
            const content = token.content
            // eslint-disable-next-line prefer-const
            let [lang, ...mods] = token.info.split(',')
            lang = hljs.getLanguage(lang)?.name ?? lang ?? ''

            const repl = makeRepl(lang, mods, content)
            const docs = getModValue(mods, 'docs')

            return `
<div class="codeheader flex rounded-t-lg">
    <span class="ml-2 outline-none align-top opacity-60 w-min">
        <b>${lang}</b>
    </span>
    <span class="mr-2 outline-none text-right align-top w-min whitespace-nowrap ml-auto">
        ${
            repl
                ? `<a href="${repl}" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">repl</a>`
                : ''
        }
        ${
            docs
                ? `<a href="${docs}" target="_blank" class="noblue transition-all opacity-50 hover:opacity-70 no-underline">docs</a>`
                : ''
        }
        <button class="opacity-50 hover:opacity-70 transition-all" title="Copy Code" onclick="navigator.clipboard.writeText(document.getElementById('${id}').innerText)">
            <div class="hidden aria-hidden" id='${id}'>${content}</div>
            copy
        </button>
    </span>
</div>
${rule(tokens, idx, options, env, self)}`
        }

    md.renderer.rules.fence = makeRule(fence)
    md.renderer.rules.code_block = makeRule(code_block)
}

export default md
