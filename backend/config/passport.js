const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

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

//   // Facebook Strategy
//   passport.use(
//     new FacebookStrategy(
//       {
//         clientID: 'your-facebook-client-id',
//         clientSecret: 'your-facebook-client-secret',
//         callbackURL: 'http://localhost:your-port/auth/facebook/callback',
//         profileFields: ['id', 'displayName', 'email'],
//       },
//       async (accessToken, refreshToken, profile, done) => {
//         try {
//           // Check if the user already exists in your database
//           let user = await User.findOne({ facebookId: profile.id });

//           if (!user) {
//             // If the user doesn't exist, create a new user in your database
//             user = await User.create({
//               facebookId: profile.id,
//               displayName: profile.displayName,
//               // Add other relevant user information from the Facebook profile
//             });
//           }

//           return done(null, user);
//         } catch (error) {
//           return done(error, null);
//         }
//       }
//     )
//   );

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
    try {
      // Deserialize the user by fetching it from the database
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
