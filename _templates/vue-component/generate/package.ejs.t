---
to: <%=name%>/package.json
---
{
  "name": "<%=name%>",
  "version": "1.0.0",
  "description": "",
  "main": "dist/<%= h.kebabName(name) %>.ssr.js",
  "module": "dist/<%= h.kebabName(name) %>.esm.js",
  "unpkg": "dist/<%= h.kebabName(name) %>.min.js",
  "licence": "MIT",
  "files": [
    "dist/*",
    "src/**/*.vue"
  ],
  "scripts": {
    "prebuild": "rm -rf dist/",
    "build": "NODE_ENV=production rollup --c rollup.config.js",
    "docs": "run-s docs:*",
    "docs:api": "vuedoc.md src/<%= h.kebabName(name) %>.vue --section 'API' --output docs/v1/readme.md --ignore-data --ignore-methods --ignore-computed",
    "docs:vuepress": "vuepress build docs",
    "predev": "npm run docs:api",
    "dev": "vuepress dev docs --open",
    "test": "jest src/*",
    "watch:test": "npm test -- --watch",
    "lint": "eslint 'src/**/*.{js,vue}'"
  },
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@vue/test-utils": "^1.0.0-beta.29",
    "@vuedoc/md": "^1.6.0",
    "@vuepress/plugin-register-components": "^1.0.0-rc.1",
    "babel-core": "^7.0.0-bridge.0",
    "babel-jest": "^24.9.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-vue": "^2.0.2",
    "eslint": "^6.3.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-vue": "^5.2.3",
    "jest": "^24.9.0",
    "minimist": "^1.2.0",
    "npm-run-all": "^4.1.5",
    "rollup": "^1.12.1",
    "rollup-plugin-buble": "^0.19.6",
    "rollup-plugin-commonjs": "^10.0.0",
    "rollup-plugin-node-resolve": "^5.2.0",
    "rollup-plugin-replace": "^2.2.0",
    "rollup-plugin-terser": "^4.0.4",
    "rollup-plugin-vue": "^5.0.0",
    "vue": "^2.6.10",
    "vue-jest": "^3.0.4",
    "vue-template-compiler": "^2.6.10",
    "vuepress": "^1.0.3",
    "vuepress-plugin-demo-code": "^0.3.5"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
  }
}
