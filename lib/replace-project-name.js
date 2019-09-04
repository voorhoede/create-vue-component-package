const replace = require('replace-in-file');
const Renamer = require('renamer');
const { pascalCaseIt, kebabCaseIt } = require("case-it")
const renamer = new Renamer()
const CURR_DIR = process.cwd()

function replaceProjectName(projectName) {
  const kebab = kebabCaseIt(projectName)
  const pascal = pascalCaseIt(projectName)

  replace.sync({
    files: `${CURR_DIR}/${projectName}/**/*`,
    from: [/<%kebabCaseName%>/g, /<%pascalCaseName%>/g],
    to: [kebab, pascal],
  });

  renamer.rename({
    files: `${CURR_DIR}/${projectName}/**/*`,
    find: '<%kebabCaseName%>',
    replace: kebab
  })

  renamer.rename({
    files: `${CURR_DIR}/${projectName}/_package.json`,
    find: '_',
    replace: ''
  })
}

module.exports = replaceProjectName
