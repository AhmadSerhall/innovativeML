const passport = require('passport');
const User = require('../models/user.model');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const configurePassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: '58934895291-0in324g2bkdgnq7etl0rds0bspgq6rc6.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:8000/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if the user already exists in your database
          let user = await User.findOne({ googleId: profile.id });

          if (!user) {
            // If the user doesn't exist, create a new user in your database
            user = await User.create({
              googleId: profile.id,
              displayName: profile.displayName,
              // Add other relevant user information from the Google profile
            });
          }

          return done(null, user);
        } catch (error) {
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

// Call the configurePassport function to set up the passport strategies
configurePassport();

// Export the passport object for use in other parts of your application
module.exports =configurePassport;
