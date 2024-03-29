const passport = require('passport');
const User = require('../models/user.model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv =require("dotenv")

const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        // clientID: '58934895291-0in324g2bkdgnq7etl0rds0bspgq6rc6.apps.googleusercontent.com',
        clientID:process.env.CLIENT_ID,
        // clientSecret: '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',
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:8000/auth/google/callback',
        scope:["profile","email"]
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log("Google authentication - Received profile:", profile);
          // Check if the user already exists in your database
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            // If the user doesn't exist, create a new user in your database
            user = await User.create({
              username: profile.emails[0].value, 
              password: profile.id,
            });
          }
          console.log('GoogleStrategy Callback - End');
          return done(null, user);
        } catch (error) {
          console.error('GoogleStrategy Callback - Error:', error);
          return done(error, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};

configurePassport();

module.exports =configurePassport;
