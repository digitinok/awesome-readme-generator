const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of licenses
const licenses = [
    "GNU Affero General Public License v3.0",
    "GNU General Public License v3.0",
    "GNU Lesser General Public License v3.0",
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
    ["How is your project licensed?", "list", "license", licenses],
    ["How can the comunity contribute to the project?", "input", "contribution"],
    ["How do you you test your project.", "input", "test"],
    ["What is you GitHub username?", "input", "gitHubName"],
    ["What is your email address?", "input", "email"],
];

// function to write README file
function writeToFile(fileName, data) {
   // path.format({
   //     root: '/',
   //     ext: '.md',
   //     name: 'README',
   //   });
      fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success! You have created a new README.md file.')
      );
}

// function to generate user prompts
const promptUser = () => {
    const questionArray = [];
    for (let question of questions) {
        // create an array of objects with the questions
        const questionObject = {
            type: question[1],
            name: question[2],
            message: question[0],
        }
        // add a choices field for checkboxes or lists
        if (question[1] === "checkbox" || question[1] === "list") {
            questionObject.choices = licenses;
        }
        questionArray.push(questionObject);
    }
    return questionArray
}

// function to initialize program
const init = () => {
    // ask questions
    inquirer.prompt(promptUser())
        .then((data) => {
            writeToFile("./samples/README.md", generateMarkdown(data))
    }); 

};
    

// function call to initialize program
init();
