let passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

let db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      db.volunteer
        .findOne({
          where: {
            email: email,
          }
        })
        .then((dbvolunteer) => {
          console.log(dbvolunteer)
          if (!dbvolunteer) {
            return done(null, false, {
              message: "Incorrect email.",
            });
          } else if (!dbvolunteer.validPassword(password)) {
            return done(null, false, {
              message: "Incorrect password.",
            });
          }
          // If none of the above, return the user
          return done(null, dbvolunteer);
        });
    }
  )
);

// Just consider this part boilerplate needed to make it all work
passport.serializeUser((volunteer, cb) => {
  cb(null, volunteer);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
