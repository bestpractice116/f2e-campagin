#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/tommm2/f2e-4rd-campagin.git master:gh-pages

cd -
