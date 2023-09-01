const GooogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
    new GooogleStrategy
);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope:['profile', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser( (user,done) => {
    done(null,user);
})

passport.deserializeUser( (user,done) => {
    done(null,user);
})