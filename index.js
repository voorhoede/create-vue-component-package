#!/usr/bin/env node

const inquirer = require('inquirer');
var copy = require('recursive-copy');
const CURR_DIR = process.cwd()
const QUESTIONS = require('./contants/questions')
const replaceProjectName = require('./lib/replace-project-name')

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const templateChoice = answers['template-choice']
    const componentName = answers['component-name']
    const src = `${__dirname}/templates/${templateChoice}`
    const dest = `${CURR_DIR}/${componentName}`
  
    copy(src, dest)
      .then(() => {
        replaceProjectName(componentName)
      })
  });
