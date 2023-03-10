// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

![alt License Badge](https://img.shields.io/badge/license-${data.license.split(" ").join("_")}-green.svg)

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

The project uses the ${data.license}. Please check the license file in the repository for further information about what you are allowed to do.

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

You can find us on GitHub: https://github.com/${data.gitHubName}.  
If you have any further questions, please feel free to send us an email: ${data.email}.  
  
`;
}

module.exports = generateMarkdown;
