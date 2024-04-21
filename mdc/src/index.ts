import fs from 'node:fs'
import { exit } from 'node:process'
import md from './markdown'
import { Feed } from '@numbered/feed'

if (process.argv.length < 5) {
    console.error('Arguments: <dir> <builddir> <index>')
    exit(1)
}

const [_, __, _dir, _builddir, index] = process.argv

const dir = _dir.replace(/\/$/, '')
const builddir = _builddir.replace(/\/$/, '')

const articles = fs
    .readdirSync(dir)
    .filter((article) => article.endsWith('.md'))

if (!fs.existsSync(builddir)) {
    fs.mkdirSync(builddir)
}

const indices = []
const unreplacedArticles = new Set(fs.readdirSync(builddir))

const hashes: { [article: string]: string } = {}
if (fs.existsSync(index)) {
    const idx = fs.readFileSync(index).toString('utf8')

    idx.split('\n')
        .map((entry) => entry.split('|||'))
        .filter((entry) => entry.length === 4)
        .forEach((content) => (hashes[content[0]] = content[3]))
}

const feed = new Feed({
    title: "Qther's Blog",
    id: 'https://vonr.github.io/feed',
    link: 'https://vonr.github.io/feed',
    copyright: 'All Rights Reserved 2024, Qther',
    language: 'en',
    feedLinks: {
        json: 'https://vonr.github.io/feed/json',
        atom: 'https://vonr.github.io/feed/atom',
    },
    author: {
        name: 'Qther',
        email: 'qther@tuta.io',
        link: 'https://github.com/Vonr',
    },
})

for (const article of articles) {
    const content = fs.readFileSync(`${dir}/${article}`)
    const hasher = new Bun.CryptoHasher('sha256')
    hasher.update(content)
    const hash = hasher.digest('hex')

    const id = article.replace(/\.md$/, '')
    const path = `${builddir}/${id}.html`

    const contentStr = content.toString('utf8')
    const firstLineEnd = contentStr.indexOf('\n')
    const secondLineEnd = contentStr.indexOf('\n', firstLineEnd + 1)

    const name = contentStr.slice(0, firstLineEnd).replace(/^#+ /, '')
    const date = contentStr
        .slice(firstLineEnd + 1, secondLineEnd)
        .replace(/^#+ /, '')
    indices.push({ id, name, date, hash })

    feed.addItem({
        title: name,
        id: `https://vonr.github.io/blog/${id}`,
        link: `https://vonr.github.io/blog/${id}`,
        date: new Date(Date.parse(date) + 8 * 60 * 60 * 1000),
        author: [
            {
                name: 'Qther',
                email: 'qther@tuta.io',
                link: 'https://github.com/Vonr',
            },
        ],
    })

    if (hashes[id] === hash && fs.existsSync(path)) {
        unreplacedArticles.delete(`${id}.html`)
        console.log(`${article} has not changed, skipping.`)
        continue
    }

    const rendered = md.render(contentStr)

    if (
        !fs.existsSync(path) ||
        fs.readFileSync(path).toString('utf8') != rendered
    ) {
        console.log(`Wrote rendered ${article} to ${builddir}/${id}.html`)
        fs.writeFileSync(path, rendered)
    } else {
        console.log(`No changes to ${article}`)
    }

    unreplacedArticles.delete(`${id}.html`)
}

fs.writeFileSync('./static/blog/feed.rss', feed.rss2())
fs.writeFileSync('./static/blog/feed.json', feed.json1())
fs.writeFileSync('./static/blog/feed.atom', feed.atom1())

for (const article of unreplacedArticles) {
    console.log(`${article} was not produced by us, removing.`)
    fs.unlinkSync(`${builddir}/${article}`)
}

const indexContent = indices
    .toSorted((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map(
        (article) =>
            `${article.id}|||${article.name}|||${article.date}|||${article.hash}`
    )
    .join('\n')

if (
    !fs.existsSync(index) ||
    fs.readFileSync(index).toString('utf8') != indexContent
) {
    fs.writeFileSync(index, indexContent)
    console.log(`Wrote index to ${index}`)
} else {
    console.log('No changes to index')
}
