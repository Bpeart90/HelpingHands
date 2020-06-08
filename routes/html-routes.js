var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("home", {
      title: "Home Page",
      style: "home.css",
    });
  });

  app.get("/signup", function (req, res) {
    res.render("signup", {
      title: "Sign Up Page!",
      style: "signup.css",
    })
  })

  // app.get("/login", function (req, res) {
  //   res.render("login", { title: "Login Page" })
  // })

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "login"));
  });

  app.get("/index", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "index"));
  });
};
