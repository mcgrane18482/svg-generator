const inquirer = require('inquirer')
const { Circle, Triangle, Rectangle } = require('./lib/Shape')
const fs = require('fs')

// write a function that gets user input for svg criteria 
function getInput() {
    inquirer.prompt([{
        name: 'text',
        message: 'Enter 3 letters'
    },
    {
        name: 'textColor',
        message: 'What color would you like the text to be?'

    },
    {
        name: 'shape',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Rectangle'],
        message: 'What shape would you like to use?'
    },
    {
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    }]).then((answer) => {
        let shape;

        // write an if statement for passing the input to the correct shape constructor and create that shape
        if (answer.shape === 'Circle') {
            shape = new Circle(answer.text, answer.textColor, answer.shapeColor)
        }
        if (answer.shape === 'Triangle') {
            shape = new Triangle(answer.text, answer.textColor, answer.shapeColor)
        }
        if (answer.shape === 'Rectangle') {
            shape = new Rectangle(answer.text, answer.textColor, answer.shapeColor)
        }
        // create a new logo.svg file with the return from render()
        fs.writeFile('./dist/logo.svg', shape.render(), (err, result) => {
            if (err) throw err;
            console.log('svg created!');
        })
    })
}

getInput()