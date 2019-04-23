const fileClient = require('solid-file-client');

// Save the personality data to a file
// Returns false if it fails, and the url is success
const savePersonality = async (personality) => {
  try {
    const { webId } = await fileClient.checkSession()
    console.log("Logged in as " + webId);
    // Create personality file
    const splitWebId = webId.split('/profile');
    const url = `${splitWebId[0]}/private/personality.json`;
    const fileCreated = await fileClient.updateFile(url, JSON.stringify(personality));
    console.log('file created:', fileCreated);
    // Create linked data json file which describes and points to the personality file
    const linkedUrl = `${splitWebId[0]}/public/personality.jsonld`;
    const linkedJson = {
      "@context": "http://schema.org/",
      "@type": "Thing",
      "name": "Five Method Personality",
      "description": "Five Method Personality values and accompanying scores.",
      "url": `${url}`
    }
    // const linkedJson = [
    //   {
    //     "@type": [
    //       "http://schema.org/Thing"
    //     ],
    //     "http://schema.org/description": [
    //       {
    //         "@value": "Five Method Personality values and accompanying scores."
    //       }
    //     ],
    //     "http://schema.org/name": [
    //       {
    //         "@value": "Five Method Personality"
    //       }
    //     ],
    //     "http://schema.org/url": [
    //       {
    //         "@id": `${url}`
    //       }
    //     ]
    //   }
    // ]
    console.dir(JSON.stringify(linkedJson))
    const linkedDataFile = await fileClient.updateFile(linkedUrl, JSON.stringify(linkedJson));
    console.log('file created:', linkedDataFile);
    return { url, linkedUrl};
  } catch (err) {
    console.error('Error in saveToSolid.js');
    console.error(err);
    return false;
  }  
}

export default savePersonality;