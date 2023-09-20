import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { child_process } from 'vite-plugin-child-process'

export default defineConfig({
    plugins: [
        child_process({
            name: "Generate Index",
            command: ["./genindex.sh"],
            watch: ["./static/articles", "./genindex.sh"]
        }),
        sveltekit(),
    ],
});
