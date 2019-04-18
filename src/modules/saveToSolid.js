const fileClient = require('solid-file-client');

// Save the personality data to a file
// Returns false if it fails, and the url is success
const savePersonality = async (personality) => {
  try {
    console.log('saveToSolid called');
    console.log(personality);
    const { webId } = await fileClient.checkSession()
    console.log("Logged in as " + webId);
    const splitWebId = webId.split('/profile');
    const url = `${splitWebId[0]}/private/test.json`;
    const fileCreated = await fileClient.updateFile(url, JSON.stringify(personality));
    console.log('file created:', fileCreated);
    return url;
  } catch (err) {
    console.error('Error in saveToSolid.js');
    console.error(err);
    return false;
  }  
}

export default savePersonality;