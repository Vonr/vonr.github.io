import type { EntryGenerator } from "./$types";

const articles = import.meta.glob("../../../../static/articles/*.md", { as: "raw" });
const entriesArr = Object.keys(articles).map((filename) => ({ article: filename.replace("../../../../static/articles/", "").replace(/\.md$/, "") }));

export const entries: EntryGenerator = () => entriesArr;
