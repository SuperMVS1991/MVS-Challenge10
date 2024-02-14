const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle, renderShape } = require('./lib/shapes');

// Function to write SVG data to a file
function writeToFile(fileName, data) { 
    console.log(fileName, data, "checking file name and data")
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`SVG data written to ${fileName}`);
        }
    });
}

// Function to initialize the application
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What kind of shape do you want?',
                name: 'Shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'list',
                message: 'What color do you want for the shape?',
                name: 'shapeColor',
                choices: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange'],
            },
            {
                type: 'input',
                message: 'What text do you want for the shape? (Up to three characters)',
                name: 'text',
            },
            {
                type: 'list',
                message: 'What color do you want the text to be?',
                name: 'textColor',
                choices: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange'],
            },
        ])
        .then((response) => {
            console.log(response, "checking response") 
            console.log(renderShape(response), "checking renderShape")
    fs.writeFile('shape.svg', renderShape(response), (err) =>
      err ? console.error(err) : console.log(response, "checking response")
  )
        })
        .catch((err) => {
            console.error(err);
        });
}

// Initialize the application
init();
