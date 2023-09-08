const express = require('express');
const app = express();

const port = 9999;


app.get('/', (req, res) => {
    res.send(`appid:${process.env.APPID} Home Page : "says hello"`);
})

app.get('/app1', (req, res) => {
    res.send(`appid:${process.env.APPID} app1 Page : "says hello"`);
})

app.get('/app2', (req, res) => {
    res.send(`appid:${process.env.APPID} app2 Page : "says hello"`);
})

app.get('/admin', (req, res) => {
    res.send(`appid:${process.env.APPID} Admin Page : "very few people should see it"` );
})

app.listen( port, () => {
     console.log(`Server is listening on port ${port}`)
})
