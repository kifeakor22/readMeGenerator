// function to generate markdown for README
const renderLicense = (license) =>{
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg) ![node](https://img.shields.io/badge/npm-package-blue)`
  }
  return ''
}
const licenseLink = (license) => {
  if(license !== "None"){
    return `\n* [License](#license)\n`
  }
  return""
}

const emailLink = (email) => {
  if(email !== "None") {
    return `\n* [Email me](mailto:email)`
  }
  return ""

}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicense(data.license)}
  
  ### Description

  ${data.description}

  ### Table of content
  * [Instalation](#installation)

  * [Usage](#usage)
  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)

  ${licenseLink(data.license)}

 
  
## Installation
   
  To install dependencies , run   

  \`\`\`
  ${data.installation}

  \`\`\`

## Usage 

  ${data.usage}

## License

  \`\`\`

  ${data.license}

  \`\`\`

## Contributing

  \`\`\`

  ${data.contributing}

  \`\`\`

## Tests 

  \`\`\`

  ${data.test}

  \`\`\`

## Questions 
  [Github profile](https://github.com/${data.github})

  \`\`\`

${emailLink(data.email)}


  \`\`\`

`;
}

module.exports = generateMarkdown;
