const inquirer = require('inquirer');
const fs = require('fs');
const {SVG, Triangle, Circle, Square} = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter text for your logo (must be no longer than 3 characters):',
            validate: function(input, answers) {
                if (input.length > 3) {
                    return 'Must not be longer than 3 characters!'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a font color or HEX code:',
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
            message: 'Enter a color or HEX code for your shape:',
        }
    ])

    .then((data) => {
        const filename = `logo.svg`;
        let shape;
        let svg = new SVG();

            if (data.shape === 'Triangle') {
                shape = new Triangle(data.logoText, data.textColor, data.shapeColor);
            }
            if (data.shape === 'Circle') {
                shape = new Circle(data.logoText, data.textColor, data.shapeColor);
            }
            if (data.shape === 'Square') {
                shape = new Square(data.logoText, data.textColor, data.shapeColor);
            };

            svg.createText(data.logoText, data.textColor);
            svg.createShape(shape);

        fs.writeFile(filename, svg.render(), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg!')

        );
    });
