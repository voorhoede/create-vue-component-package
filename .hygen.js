const { pascalCaseIt, kebabCaseIt } = require('case-it')

function stripOrg (name) {
  return name.split('/').filter(part => !part.includes('@')).join('')
}

module.exports = {
  helpers: {
    pascalName: name => {
      const packageName = stripOrg(name)

      if (packageName) {
        return pascalCaseIt(packageName)
      } else {
        return ''
      }
    },
    kebabName: name => {
      const packageName = stripOrg(name)

      if (packageName) {
        return kebabCaseIt(packageName)
      } else {
        return ''
      }
    }
  }
}