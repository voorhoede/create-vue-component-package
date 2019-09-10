#!/usr/bin/env node

const { runner } = require('hygen')
const Logger = require('hygen/lib/logger')
const path = require('path')
const inquirer = require('inquirer');
const QUESTIONS = require('./constants/questions')
const defaultTemplates = path.join(process.cwd(), 'templates')

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const templateChoice = answers['template-choice']
    const componentName = answers['component-name']
    const githubActionPublishing = answers['github-action-publishing']
    
    runner([templateChoice, 'generate', componentName], {
      templates: defaultTemplates,
      cwd: process.cwd(),
      logger: new Logger(console.log.bind(console)),
      createPrompter: () => require('enquirer'),
      exec: (action, body) => {
        const opts = body && body.length > 0 ? { input: body } : {}
        return require('execa').shell(action, opts)
      },
      debug: !!process.env.DEBUG
    })
  });