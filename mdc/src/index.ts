import fs from 'node:fs'
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import Rust from "highlight.js/lib/languages/rust";
import { exit } from 'node:process';

if (process.argv.length < 5) {
    console.error("Arguments: <dir> <builddir> <index>");
    exit(1);
}

const [_, __, _dir, _builddir, index] = process.argv;

const dir = _dir.replace(/\/$/, "");
const builddir = _builddir.replace(/\/$/, "");

const articles = fs.readdirSync(dir).filter((article) => article.endsWith(".md"));

let indices = [];

hljs.registerLanguage("rust", Rust);

const md: MarkdownIt = MarkdownIt({
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs codeblock"><code>${hljs.highlight(str, {
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
    function(tokens, idx, options, _env, self) {
        return self.renderToken(tokens, idx, options);
    };

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
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

if (!fs.existsSync(builddir)) {
    fs.mkdirSync(builddir);
}

for (const article of articles) {
    const id = article.replace(/\.md$/, "");

    const content = fs.readFileSync(`${dir}/${article}`).toString('utf8');

    const firstLineEnd = content.indexOf('\n');
    const secondLineEnd = content.indexOf('\n', firstLineEnd + 1);

    const name = content.slice(0, firstLineEnd).replace(/^#+ /, "");
    const date = content.slice(firstLineEnd + 1, secondLineEnd).replace(/^#+ /, "");

    const rendered = md.render(content);
    fs.writeFileSync(`${builddir}/${id}.html`, rendered)

    indices.push({ id, name, date })
}


const indexContent = indices
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map((article) => `${article.id}|||${article.name}|||${article.date}`)
    .join("\n");

fs.writeFileSync(index, indexContent)
