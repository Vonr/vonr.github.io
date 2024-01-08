import type { EntryGenerator, PageLoad } from './$types'
import index from '$lib/article-index?raw'

export const entries: EntryGenerator = async () => {
    return index
        .split('\n')
        .map((entry) => entry.split('|||'))
        .filter((entry) => entry.length === 3)
        .map(([id, _name, _date]) => ({ article: id }))
}

export const load: PageLoad = async ({ params }) => {
    const id = params.article
    const post = await import(`../../../lib/articles/${id}.html?raw`)

    return { post: post.default }
}
