let path = require("path");

let isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("signup");
  });
  app.get("/login", function (req, res) {
    res.render("login");
  });
  app.get("/index", function (req, res) {
    res.render("index");
  });

  // app.get("/login", function (req, res) {
  // If the user already has an account send them to the members page
  // if (req.user) {
  // res.rener("/index");
  // }
  // res.sendFile(path.join(__dirname, "login"));
  // });

  // app.get("/index", isAuthenticated, function (req, res) {
  // res.sendFile(path.join(__dirname, "index"));
  // });
};
