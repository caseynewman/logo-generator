const inquirer = require('inquirer');

const prompt = async() => {
    const input = await inquirer.prompt({
        type: 'input',
        name: 'Logo text'
        message: 'Enter text for your logo (must not be longer than 3 characters).'
    })
}
