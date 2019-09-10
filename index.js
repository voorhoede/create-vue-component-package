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
    const githubActionPublishing = answers['github-action-publishing']

    const filter = [
      '**/*',
      githubActionPublishing ? false : '!.github'
    ].filter(value => value)

    const options = {
      filter,
      dot: true
    }
  
    copy(`${__dirname}/templates/${templateChoice}`, `${CURR_DIR}/${componentName}`, { options })
      .then(() => {
        replaceProjectName(componentName)
      })
  });
