const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter text for your logo (must be no longer than 3 characters):',
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

        if (data.logoText.length > 3) {
            console.log('Your text must be no more than 3 characters in length!')
            return
        }

        if (data.shape.value === 'Triangle' && data.logoText.length > 3) {
            const newTriangle = new Triangle(text, textColor, shape, shapeColor);
            return newTriangle
        };

        if (data.shape.value === 'Circle' && data.logoText.length > 3) {
            const newCircle = new Circle(text, textColor, shape, shapeColor);
            return newCircle
        };

        if (data.shape.value === 'Square' && data.logoText.length > 3) {
            const newSquare = new Square(text, textColor, shape, shapeColor);
            return newSquare
        };

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg!')

      );
      console.log(data)
      console.log(data.logoText.length)

    });
