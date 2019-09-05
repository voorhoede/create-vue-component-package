# Create Vue Component Package

This package can be used to quickly generate the base for your component to be published on npm. It contains the following features:

* Rollup to transpile for ESM, SSR and UNPKG
* Vuepress for documentation
* Automated API documentation generation with [vuedoc.md](https://www.npmjs.com/package/@vuedoc/md)

## Usage

Run the following command in your terminal to initialize:

```
npm init vue-component-package
```

## Roadmap

* [ ] add support for component/directive/...
* [ ] add TypeScript support
* [ ] add test setup
* [ ] add style bundling (postcss > legacy + modern?)
* [ ] add version support (simple docs/v1/?) and configure [VuePress search by version](https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html#options)
