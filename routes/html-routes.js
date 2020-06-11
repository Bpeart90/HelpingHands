let path = require("path");

let isAuthenticated = require("../config/middleware/isAuthenticated");

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
    });
  });

  app.get("/login", function (req, res) {
    res.render("login", {
      title: "Login Page",
      style: "home.css",
    });
  });

  // app.get("/opportunity", function (req, res) {
  //   res.render("opportunity", {
  //     title: "Opportunity Page",
  //     style: "home.css",
  //   });
  // });

};
