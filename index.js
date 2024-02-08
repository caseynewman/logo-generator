const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

class CLI {
    constructor() {
        this.textInput = '';
        this.logoShape = '';
    }

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>`
    }

    createText(logoText, textColor) {
        this.textInput = `<text x="150" y="125" font-size="60" fill="${textColor}">${logoText}</text>`
    }

    createShape(shape) {
        this.logoShape = shape.render();
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter text for your logo (must be no longer than 3 characters).',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a font color or HEX code',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose your logo shape',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color or HEX code for your shape',
        }
    ])

    .then((input) => {
        const filename = `logo.svg`;

        const newInput = new CLI

        fs.writeFile(filename, new CLI(input, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
      );
    });
