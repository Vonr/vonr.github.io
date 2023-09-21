#!/bin/sh
rm -rf './static/articles/*' 2> /dev/null
> './static/article-index'
bun run './mdc/src/index.ts' './articles' './static/articles' './static/article-index'
