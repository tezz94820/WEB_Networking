const express = require('express');
const app = express();
const axios = require('axios');
const redis = require('redis');

const client = redis.createClient(6379);

const cache = (req, res, next) => {
    const { username } = req.params; // Extract the username from req.params
    client.get(username, (err, data) => {
        if (err) 
            console.log(`Not Fetched for ${username} and ${err.message}`);
        if (data !== null) {
            res.send(`<h1>${username} has ${data} public github repos (cached)</h1>`);
        } else {
            next(); // Continue to the next middleware if data is not cached
        }
    }); 
};

const getusername = async (req, res) => {
    const {username} = req.params;
    console.log('hitting the server for '+username);
    const response = await axios.get('https://api.github.com/users/'+username);
    const public_repos = response.data.public_repos;
    if(public_repos !=null || public_repos != undefined){
        client.set(username,public_repos);
    }
    res.send(`<h1>${username} has ${public_repos} public github repos</h1>`);
}
app.get('/getcontent/:username',getusername );

app.listen(5000 , () => {
    console.log('server is listening on port 5000')
}) 