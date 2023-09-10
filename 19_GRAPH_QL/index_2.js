const axios = require('axios');
require('dotenv').config();

const token = process.env.GITHUB_TOKEN;

const getFreecodeCampData = async (req, res) => {
    //name and forCount we want from the github of repository freecodecamp of which owner is repository.
    const q = `{
        repository (name:"freecodecamp" , owner: "freecodecamp"){
            name 
            forkCount
        }
    }`

    // you only make one previous get request . now this is a post request b/c the body's going to be long now. 
    const response = await axios.post('https://api.github.com/graphql', {
        query:q
    } , {
        headers: {
            Authorization: `Token ${token}`
        }
    }) 

    console.log(response.data);

}




getFreecodeCampData();