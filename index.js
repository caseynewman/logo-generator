const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

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

    .then((logoText, textColor, shape, shapeColor) => {
        const filename = `logo.svg`;

        if(shape === 'Triangle') {
            const newTriangle = new Triangle(text, textColor, shape, shapeColor)
        };

        if(shape === 'Circle') {
            const newCircle = new Circle(text, textColor, shape, shapeColor)
        };

        if(shape === 'Square') {
            const newSquare = new Square(text, textColor, shape, shapeColor)
        };

        fs.writeFile(filename, SVG.render(input, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')
      );
    });
