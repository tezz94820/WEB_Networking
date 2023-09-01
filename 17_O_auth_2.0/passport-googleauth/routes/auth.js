const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get( 
    '/google/callback',
    passport.authenticate( 'google', { 
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: '/login/failed' 
    }),
)

module.exports = router;