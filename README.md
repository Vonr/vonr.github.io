# Qther's Website

Created with SvelteKit.

## Build Instructions

```sh
# Install dependencies
bun install

# Install dependencies for the markdown compiler for the articles
cd mdc
bun install
cd ..

# Build articles with mdc
./compile_articles.sh

# Build site into build folder
bun run build
```

## Development Instructions

```sh
# Install dependencies
bun install

# Install dependencies for the markdown compiler for the articles
cd mdc
bun install
cd ..

# Start vite's development server
bun run dev
```
