const inquirer = require('inquirer')
const MakeSvg = require('MakeSvg')

// write a function that gets user input for svg criteria and passes it to a constructor 
function getInput() {
    inquirer.prompt([{
        name: 'text',
        message: 'Enter 3 letters'
    },
    {
        name: 'text-color',
        message: 'What color would you like the text to be?'

    },
    {
        name: 'shape',
        message: 'What shape would you like to use?'
    },
    {
        name: 'shape-color',
        message: 'What color would you like the shape to be?'
    }]).then((answer) => {
        const text = answer.text
        const textColor = answer.text-color
        const shape = answer.shape
        const shapeColor = answer.shapeColor
        // pass answers to the constructor method
        MakeSvg.generate(text, textColor, shape, shapeColor)
        console.log('Generated logo.svg')
    })
}