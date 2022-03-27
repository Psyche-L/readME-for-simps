// DONE: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

// DONE: Create a function to write README file 
function writeToFile(fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Your readMe was created! Go take a gander at the README.md file to see for yourself!");
        }
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
