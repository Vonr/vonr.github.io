import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { child_process } from 'vite-plugin-child-process'

export default defineConfig({
    plugins: [
        child_process({
            name: "Compile Articles",
            command: ["./compile_articles.sh"],
            watch: ["./articles", "./mdc", './compile_articles.sh']
        }),
        sveltekit(),
    ],
});
