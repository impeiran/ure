#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git add -A
git commit -m 'Build: docs'
git push -f https://github.com/impeiran/ure.git master:gh-pages

cd -