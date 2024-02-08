const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes');

class CLI {
    constructor() {
        this.textInput = '';
        this.shape = '';
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter text for your logo (must be no longer than 3 characters).',
            name: 'logo-text',
        },
        {
            type: 'input',
            message: 'Enter your text color',
            name: 'text-color',
        },
        {
            type: 'checkbox',
            message: 'Choose your logo shape',
            name: 'shape',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            message: 'Enter a color for your shape',
            name: 'shape-color',
        }
    ])

    .then((input) => {
        console.log(input);
    })

prompt()
