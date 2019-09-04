const fs = require('fs')
const CURR_DIR = process.cwd()

function createDirectoryContents (templatePath, newProjectPath, projectName) {
  const filesToCreate = fs.readdirSync(templatePath)

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`
    
    const stats = fs.statSync(origFilePath)

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8')
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`

      fs.writeFileSync(writePath, contents, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`)

      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`, projectName)
    }
  });
}

module.exports = createDirectoryContents