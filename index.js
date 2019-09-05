#!/usr/bin/env node

const inquirer = require('inquirer');
var copy = require('recursive-copy');
const CURR_DIR = process.cwd()
const QUESTIONS = require('./contants/questions')
const replaceProjectName = require('./lib/replace-project-name')

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['project-choice']
    const componentName = answers['component-name']
    const src = `${__dirname}/templates/${projectChoice}`
    const dest = `${CURR_DIR}/${componentName}`
  
    copy(src, dest)
      .then(() => {
        replaceProjectName(componentName)
      })
  });
