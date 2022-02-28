const passport = require("passport");
const GoogleTokenStrategy = require("passport-google-verify-token").Strategy;

module.exports = passport.use(
  new GoogleTokenStrategy(
    {
      clientID: process.env.googleAuthId,
      //   clientSecret: process.env.fbAppSecret,
      //   profileFields: ['email', 'name','displayName','picture.type(large)'],
    },
    function (parsedToken, googleId, done) {
      console.log("parsedToken, googleId", { parsedToken, googleId });
      done(null, parsedToken);
    }
  )
);
