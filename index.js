const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

// class CLI {
//     constructor() {
        // this.textInput = '';
        // this.shape = '';
//     }
// }

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
            type: 'list',
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
        const filename = `logo.svg`;

        fs.writeFile(filename, JSON.stringify(input, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
      );
    });
