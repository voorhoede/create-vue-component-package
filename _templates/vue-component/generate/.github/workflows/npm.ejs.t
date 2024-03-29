---
to: "<%= publishing ? name + '/.github/workflows/npm.yml' : null %>"
---
on:
  push:
    tags: v*.*.*

jobs:
  npm:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master

    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'

    - name: Install npm dependencies
      run: npm ci

    - name: Lint code
      run: npm run lint

    - name: Test and build package
      run: |
        npm test
        npm run build

    - name: Publish tag to npm
      if: contains(github.ref, 'tags')
      run: npm publish --access=public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }}
