#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs')
const CURR_DIR = process.cwd()
const QUESTIONS = require('./contants/questions')
const createDirectoryContents = require('./lib/create-directory-contents')
const replaceProjectName = require('./lib/replace-project-name')

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['project-choice']
    const projectName = answers['project-name']
    const templatePath = `${__dirname}/templates/${projectChoice}`
  
    fs.mkdirSync(`${CURR_DIR}/${projectName}`)

    createDirectoryContents(templatePath, projectName, projectName)
    replaceProjectName(projectName)
  });
