import fs from 'node:fs'
import { exit } from 'node:process'
import md from './markdown'

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

for (const article of articles) {
    const id = article.replace(/\.md$/, '')

    const content = fs.readFileSync(`${dir}/${article}`).toString('utf8')

    const firstLineEnd = content.indexOf('\n')
    const secondLineEnd = content.indexOf('\n', firstLineEnd + 1)

    const name = content.slice(0, firstLineEnd).replace(/^#+ /, '')
    const date = content
        .slice(firstLineEnd + 1, secondLineEnd)
        .replace(/^#+ /, '')

    const rendered = md.render(content)
    const path = `${builddir}/${id}.html`

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

    indices.push({ id, name, date })
}

for (const article of unreplacedArticles) {
    console.log(`${article} was not produced by us, removing.`)
    fs.unlinkSync(`${builddir}/${article}`)
}

const indexContent = indices
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map((article) => `${article.id}|||${article.name}|||${article.date}`)
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
