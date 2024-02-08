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
        } else {
            if (data.shape === 'Triangle') {
                // const newTriangle = new Triangle(text, textColor, shape, shapeColor);
                console.log('its a triangle')
            } else if (data.shape === 'Circle') {
                // const newCircle = new Circle(text, textColor, shape, shapeColor);
                console.log(newCircle)
            } else if (data.shape === 'Square') {
                // const newSquare = new Square(text, textColor, shape, shapeColor);
                console.log(newSquare)
            };
        }

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg!')

        );
        console.log(data)
        console.log(data.shape)

    });
