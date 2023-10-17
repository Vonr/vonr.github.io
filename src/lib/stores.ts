import type MarkdownIt from "markdown-it";
import { writable, type Writable } from "svelte/store";

const themes = ["light", "dark"] as const;
type Theme = typeof themes[keyof typeof themes];

export const theme: Writable<Theme> = writable("dark");
export const md: Writable<MarkdownIt | null> = writable(null);
