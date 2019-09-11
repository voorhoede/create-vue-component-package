#!/usr/bin/env node

const { runner } = require('hygen')
const Logger = require('hygen/lib/logger')
const inquirer = require('inquirer');
const QUESTIONS = require('./constants/questions')
const defaultTemplates = `${__dirname}/_templates`
const { pascalCaseIt, kebabCaseIt } = require('case-it')

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const templateChoice = answers['template-choice']
    const componentName = answers['component-name']
    
    runner([templateChoice, 'generate', componentName], {
      templates: defaultTemplates,
      cwd: process.cwd(),
      logger: new Logger(console.log.bind(console)),
      createPrompter: () => require('enquirer'),
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
      },
      exec: (action, body) => {
        const opts = body && body.length > 0 ? { input: body } : {}
        return require('execa').shell(action, opts)
      },
      debug: !!process.env.DEBUG
    })
  });

function stripOrg (name) {
  return name.split('/').filter(part => !part.includes('@')).join('')
}
  