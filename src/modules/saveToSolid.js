const fileClient = require('solid-file-client');

const savePersonality = (personality) => {
  fileClient.checkSession().then(session => {
    console.log("Logged in as " + session.webId)
  }, err => console.log(err));

  
  // fileClient.updateFile(url, newContent, contentType).then(success => {
  //   console.log(`Updated ${url}.`)
  // }, err => console.log(err));

}

module.exports = savePersonality;