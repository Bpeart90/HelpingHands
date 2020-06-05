let express = require("express");
let session = require("express-session");

let passport = require("./config/passport");
// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 5000;

// Requiring our models for syncing
let db = require("./models");

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

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require("./routes/creator-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/opportunity-routes.js")(app);
// require("./routes/app-routes.js")(app);
// require("./routes/volunteer.js")(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
