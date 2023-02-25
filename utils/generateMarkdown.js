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


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicense(data.license)}
  
  ### Description

  ${data.description}

  ### Table of content
  * [Instalation](#installation)

  * [Usage](#usage)

  ${licenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#tests)

  * [Questions](#questions)
  
  ## Installation
   
  To install dependencies , run   

  \`\`\`
  ${data.installation}

  \`\`\`

  ## Usage 

  ${data.usage}

  ## License

  \`\`\`

  [License](${renderLicense(data.license)})

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
  ![Github profile](https://github.com/${data.github})

  \`\`\`

  Email me at${data.email} with any questions

  \`\`\`

`;
}

module.exports = generateMarkdown;
