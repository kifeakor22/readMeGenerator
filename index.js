const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
   {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?'
   },
   {
    type: 'input',
    name: 'email',
    message: 'What is your Email address?'
   },
   {
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
   },
   {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project?'
   },
   {
    type: 'list',
    name: 'license',
    message: 'What kind of license?',
    choices: ["MIT","APACHE 2.0", "GPL", "None"]
   },
   {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
   },
   {
    type: 'input',
    name: 'test',
    message: 'What command should be run to test the application?',
    default: 'npm test'
   },
   {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this repo?'
   },
   {
    type: 'input',
    name: 'contributing',
    message: 'how can a user contribute to the repo?'
   },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response)=> {
        console.log(`Generating README...`)
        writeToFile('README.md', generateMarkdown({...response}))
    })

}

// function call to initialize program
init();
