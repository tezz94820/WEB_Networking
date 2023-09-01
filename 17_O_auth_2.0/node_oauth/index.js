const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

port = process.env.PORT || 3000;

//view Engine
app.set('view engine', 'ejs');

//extra middlewares
app.use(cors());

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});