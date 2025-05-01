import { h } from 'hastscript'
import { exit } from 'node:process'
import { getFullName, makeRepl } from './repl'
import { getModValue } from './util'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkRehype, { defaultHandlers } from 'remark-rehype'
import remarkParse from 'remark-parse'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import { unified } from 'unified'
import yaml from 'yaml'
import remarkDirective from 'remark-directive'
import directorPlugin from './plugins/director'
import { Element } from 'hast'

if (process.argv.length < 5) {
    console.error('Arguments: <dir> <builddir> <index>')
    exit(1)
}

const counts: { [key: string]: number } = {}
const increment = (key: string): string => {
    const count = counts[key] ?? 1
    counts[key] = count + 1
    return `${key}_${count}`
}

export interface Frontmatter {
    title: string
    date: string
}

export const parseFrontmatter = (s: string) => {
    const frontmatter: Frontmatter = yaml.parse(s)

    const { title, date } = frontmatter
    if (title == null || date == null) {
        throw new Error('Frontmatter must include `title` and `date` fields.')
    }

    return {
        title,
        date,
    }
}

export const md = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(directorPlugin)
    .use(remarkRehype, {
        allowDangerousHtml: true,
        handlers: {
            code: (state, node) => {
                const id = increment('cbcp')
                const content = node.value
                // eslint-disable-next-line prefer-const
                let [lang, ...mods] = node.lang.split(',') ?? []
                lang = getFullName(lang)
                node.lang = lang

                const repl = makeRepl(lang, mods, content)
                const docs = getModValue(mods, 'docs')

                const rendered = defaultHandlers.code(state, node)

                return [
                    h(
                        'div.codeheader.flex.rounded-t-lg',
                        h(
                            'span.ml-2.outline-none.align-top.opacity-70.w-min',
                            h('b', lang)
                        ),
                        h(
                            'span.mr-2.outline-none.text-right.align-top.w-min.whitespace-nowrap.ml-auto',
                            repl
                                ? h(
                                      `a.noblue.transition-all.opacity-70.hover:opacity-100.no-underline`,
                                      { href: repl, target: '_blank' },
                                      'repl '
                                  )
                                : '',
                            docs
                                ? h(
                                      `a.noblue.transition-all.opacity-70.hover:opacity-100.no-underline`,
                                      { href: docs, target: '_blank' },
                                      'docs '
                                  )
                                : '',
                            h(
                                'button.opacity-70.hover:opacity-100.transition-all',
                                {
                                    title: 'Copy Code',
                                    onclick: `navigator.clipboard.writeText(document.getElementById('${id}').innerText)`,
                                },
                                h(
                                    'div.hidden.aria-hidden',
                                    { id: id },
                                    content
                                ),
                                'copy'
                            )
                        )
                    ),
                    rendered,
                ] as Element[]
            },
            yaml: (_state, node) => {
                const frontmatter = parseFrontmatter(node.value)
                return [
                    h('h1#title', frontmatter.title),
                    h('h1.nolink#date', frontmatter.date),
                ]
            },
        },
    })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
        test: (element) => {
            return !(
                (
                    element?.properties?.className as string[] | undefined
                )?.includes('nolink') ?? false
            )
        },
        behavior: 'wrap',
        properties: {
            className: [
                'section_heading',
                'no-underline',
                'dark:text-[#83a598]',
            ],
        },
    })
    .use(rehypePrettyCode, {
        theme: {
            dark: 'kanagawa-wave',
            light: 'kanagawa-lotus',
        },
    })
    .use(remarkFrontmatter, ['yaml'])
    .use(rehypeStringify)
