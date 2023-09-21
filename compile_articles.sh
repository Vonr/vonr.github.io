#!/bin/sh
rm -rf './src/lib/articles/*' 2> /dev/null
: > './src/lib/article-index'
bun run './mdc/src/index.ts' './articles' './src/lib/articles' './src/lib/article-index'
