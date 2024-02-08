const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter text for your logo (must be no longer than 3 characters).',
            name: 'Logo Text',
        },
        {
            type: 'input',
            message: 'Enter your text color',
            name: 'Text Color',
        },
        {
            type: 'checkbox',
            message: 'Choose your logo shape',
            name: 'Logo Shape',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            message: 'Enter a color for your shape',
            name: 'Shape Color',
        },
    ])

    .then((input) => {
        console.log(input);
    })

