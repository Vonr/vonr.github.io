#!/bin/sh
find './static/articles/' -maxdepth 1 -name '*.md' -exec sh -c '{ basename "$1" | sed "s/\.md$//" > /dev/stderr | head -2 "$1" | sed "s/^#\+ //"; } 2>&1 | sed "N;N;s/\n/|||/g"' shell {} \; > ./static/article-index
