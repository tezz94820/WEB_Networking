const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport.js')
require('dotenv').config();


app.use(
    cookieSession({
        name: 'session',
        keys: ['cyberwolve'],
        maxAge: 24 * 60 * 60 * 1000
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:'http://localhost:5000', 
    methods: "GET,POST,PUT,DELETE",
    credentials : true
}));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})