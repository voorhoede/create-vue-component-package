const fs = require('fs')

const CHOICES = fs.readdirSync(`${__dirname}/../templates`).filter(name => !name.startsWith('.'))

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
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Component name may only include letters, numbers, underscores and hashes.';
    }
  }
];

module.exports = QUESTIONS