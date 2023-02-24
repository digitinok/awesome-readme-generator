const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of licenses
const licenses = [
    "GNU AGPLv3",
    "GNU GPLv3",
    "GNU LGPLv3",
    "Mozilla Public License 2.0",
    "Apache License 2.0",
    "MIT License",
    "Boost Software License 1.0",
    "The Unlicense",
];

// array of questions for user
const questions = [
    ["What is the title of your project?", "input", "projectName"],
    ["How would you describe your project?", "input", "description"],
    ["How do you install your project?", "input", "installation"],
    ["How do you use your project?", "input", "usage"],
    ["How is your project licensed?", "checkbox", "license", licenses],
    ["How can the comunity contribute to the project?", "input", "contribution"],
    ["How do you you test your project.", "input", "test"],
    ["What is you GitHub username?", "input", "gitHubName"],
    ["What is your email address?", "input", "email"],
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
