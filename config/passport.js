let passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

let db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      db.volunteer
        .findOne({
          where: {
            email: email,
          }
        })
        .then((dbvolunteer) => {
//if there is no user with the given email
          if (!dbvolunteer) {
            return (
              done(null, false),
              {
                message: "Incorrect Email",
              }
            );
          } else if (!dbvolunteer.validPassword(password)) {
            return done(null, false, {
              message: "Incorrect Password",
            });
          }
          // If none of the above, return the user
          return done(null, dbvolunteer);
        });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});
module.exports = passport;
