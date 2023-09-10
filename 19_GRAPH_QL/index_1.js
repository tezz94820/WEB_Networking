const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const token = process.env.GITHUB_TOKEN;

const getInitialResponse = async (req, res) => {
    // make a get request to get all the necessary primary information about github grpahql schemas and onject types.
    const response = await axios.get('https://api.github.com/graphql', {
        headers: {
            Authorization: `Token ${token}`
        }
    }) 
    console.log(response.data);

    const jsonData = JSON.stringify(response.data, null, 2);
    const fileName = 'jsonData.json';

    fs.writeFile(fileName, jsonData, (err) => {
        if (err) {
        console.error('Error writing to JSON file:', err);
        } else {
        console.log(`Data has been written to ${fileName}`);
        }
    });

}





getInitialResponse();


// First you make a get request to get all the schemas than all the object types of the graph ql . Here we use the github api. So first we made a get request to the github api and get all the necessary object types. 
// This is the only get request now we are only going to send a post request with the graph you are query

