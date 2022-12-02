// use inquirer to generate prompts for user input
// create html file that formats each different team members information into easy to access links
// create test that runs through all of the functionality of the application to test features

const inquirer = require('inquirer');

function prompts() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter member name: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter member id number: ',
        },
        {
            type: 'list',
            name: 'position',
            message: 'Select member position from selection below: ',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then((data) => {
        console.log(data);
    })
};

prompts();