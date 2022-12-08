// use inquirer to generate prompts for user input
// create html file that formats each different team members information into easy to access links
// create test that runs through all of the functionality of the application to test features

const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./develop/lib/employee');
const Manager = require('./develop/lib/manager');
const Engineer = require('./develop/lib/engineer');
const Intern = require('./develop/lib/intern');
const { setEnvironmentData } = require('worker_threads');
const staff = [];

//display intial prompts

function positionPrompt () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'roleName',
            message: 'Please select member position:',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then((data) => {
        const position = data.roleName;
        prompts(position);
    })
};

function prompts(position) {
    if(position === 'Manager') {
        inquirer.prompt([
            {
                type: 'Input',
                name: 'name',
                message: 'Enter member name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter member id:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter member email:',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter office number:',
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.email, answers.id, answers.officeNumber);
            console.log(manager);
            staff.push(manager);
            askAgain();
        })
    } else if(position === 'Engineer') {
        inquirer.prompt([
            {
                type: 'Input',
                name: 'name',
                message: 'Enter member name:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter member email:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter member id:',
            },
            {
                type: 'input',
                name: 'specialAnswer',
                message: 'Enter GitHub:',
            }
        ])
        
    } else if(position === 'Intern'){
        inquirer.prompt([
            {
                type: 'Input',
                name: 'name',
                message: 'Enter member name:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter member email:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter member id:',
            },
            {
                type: 'input',
                name: 'specialAnswer',
                message: 'Enter school:',
            }
        ])
    }   
}
function askAgain () {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'confirm',
            message: 'Would you like to add more members?',
            choices: ['yes', 'no']
        }
    ])
    .then((response) => {
        if(response === 'yes') {
            positionPrompt();
        } else {
            console.log(staff);
        }
    })
}
positionPrompt();


