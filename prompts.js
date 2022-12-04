// use inquirer to generate prompts for user input
// create html file that formats each different team members information into easy to access links
// create test that runs through all of the functionality of the application to test features

const inquirer = require('inquirer');
const newManager = require('./develop/lib/manager');

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
        if(data.position === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter office number:'
                }
            ])
        } else if(data.position === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter GitHub:'
                }
            ])
        } else {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter school name:'
                }
            ])
        }
    })
    .then((employeeData) => {
        newEmployee(employeeData);
    })
};
function newEmployee() {
    if(data.position === 'Manager') {
        
    }
}
prompts();