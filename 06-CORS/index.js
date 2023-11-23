const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.status(200).send('Hello World');
})

//this options method allows the client to ask whatever options are available if the user asks about something exclusiv
app.options('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','content-type')
})


app.listen(port, () => {
    console.log(`server listening on ${port}`)    
})


//at the browser we will write to check the server cors availbility for the origin where you are applying it on.
//fetch('http://localhost:8888/).then(a=>a.text()).then(console.log);