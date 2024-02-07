const inquirer = require('inquirer');
const fs = require('fs');

const prompt = async() => {
    const input = await inquirer.prompt([
    {
        type: 'input',
        message: 'Enter text for your logo (must be no longer than 3 characters).',
        name: 'Logo Text'
    },
    {
        type: 'input',
        message: 'Enter your text color',
        name: 'Text Color'
    },
    {
        type: 'checkbox',
        message: 'Choose your logo shape',
        name: 'Logo Shape'
    },
    {
        type: 'input',
        message: 'Enter a color for your shape',
        name: 'Shape Color'
    }
])

    console.log(input)
}

prompt()
