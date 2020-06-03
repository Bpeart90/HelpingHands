var express = require("express");
var session = require("express-session");

var passport = require("./config/passport");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// require("./routes/creator-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/opportunity-routes.js")(app);
// require("./routes/app-routes.js")(app);
// require("./routes/volunteer.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
