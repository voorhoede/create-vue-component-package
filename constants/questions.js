const fs = require('fs')
var validate = require("validate-npm-package-name")

const CHOICES = fs.readdirSync(`${__dirname}/../_templates`).filter(name => !name.startsWith('.'))

const QUESTIONS = [
  {
    name: 'template-choice',
    type: 'list',
    message: 'What template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'component-name',
    type: 'input',
    message: 'Component name:',
    validate: function (input) {
      const valid = validate(input)

      if (valid.validForNewPackages) return true
      else return valid.errors.join(', ')
    }
  }
];

module.exports = QUESTIONS