// DONE: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../readME-for-simps/utils/src/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        default: "Project Title",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project.",
      },
      {
        type: "input",
        name: "url",
        message: "What is your project URL? (press enter to skip.)",
      },
      {
        type: "input",
        name: "installation",
        message: "How do you install this project?",
        default: "",
      },
      {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
      },
      {
        type: "list",
        name: "licenseBadge",
        message: "Please select what license you would like to include:",
        choices: ["MIT", "MPL 2.0", "IPL 1.0", "EPL 1.0", "ODC BY", "None"],
      },
      {
        type: "input",
        name: "contributors",
        message:
          "Please list any contributors you would like to name with commas in between each. If you do not have any contributors press enter",
      },
      {
        type: "input",
        name: "tests",
        message: "Please list any test instructions for this project.",
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username? (Please leave out the @ symbol)",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
];

// DONE: Create a function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Your readMe was created! Go take a gander at the README.md file to see for yourself!");
        }
    });
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile("README.md", answers);
    })
    .catch((error) => {
        console.log(error);
    });
};

// Function call to initialize app
init();
