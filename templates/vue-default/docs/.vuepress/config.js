const pkg = require('../../package.json')

module.exports = {
    title: `${pkg.name}`,
    description: pkg.description,
    dest: `dist/`,
    themeConfig: {
        search: false
    },
    plugins: [
        ['@vuepress/register-components', {
            componentsDir: `${__dirname}/../../src/`
        }],
        ['demo-code', {}]
    ]
}