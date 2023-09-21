import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";

export const entries: EntryGenerator = async () => {
    let index = await import('../../../../static/article-index?raw');
    return index.default
        .split("\n")
        .map((entry) => entry.split("|||"))
        .filter((entry) => entry.length === 3)
        .map(([id, _name, _date]) => ({ article: id }))
};

export const load: PageLoad = async ({ params, fetch }) => {
    const id = params.article;
    const post = await fetch(`/articles/${id}.html`);

    if (!post.ok) {
        throw redirect(307, '/blog')
    }

    return { post: post.text() }

}
