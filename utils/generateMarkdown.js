// function to generate markdown for README
const renderLicense = (license) =>{
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}
const licenseLink = () => {
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

`;
}

module.exports = generateMarkdown;
