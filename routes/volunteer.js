let db = require("../models");
let passport = require("../config/passport.js");
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = (app) => {
  app.get("/api/volunteer", (req, res) => {
    db.volunteer
      .findAll({
        include: [db.opportunity],
      })
      .then((dbvolunteer) => {
        res.json(dbvolunteer);
      });
  });
  app.post("/api/volunteer/login", passport.authenticate("local"), function (
    req,
    res
  ) {
    res.json(req.user);
  });
  app.get("/api/volunteer/:id", (req, res) => {
    db.volunteer
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [db.opportunity],
      })
      .then((dbvolunteer) => {
        res.json(dbvolunteer);
      });
    db.volunteer
      .findAll({
        include: [db.opportunity],
      })
      .then((dbvolunteer) => {
        res.json(dbvolunteer);
      });
  });
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });
  app.put("/api/volunteer/claimOpportunity", isAuthenticated, (req, res) => {
    let claimID = req.body.id;
    let user = req.user;
    console.log(claimID);
    console.log(user);
    db.opportunity
      .update({
        claimed: true,
        claimedBy: user.id
      },
        {
          where: {
            id: claimID,
          }
        }).then(function (data) {
          console.log(data);
          res.json(data);
        }).catch(function (err) {
          console.log("error", err)
        });

  });


  app.get("/api/volunteer/:id", (req, res) => {
    db.volunteer
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [db.opportunity],
      })
      .then((dbvolunteer) => {
        res.json(dbvolunteer);
      });
  });

  app.post("/api/volunteer", (req, res) => {
    db.volunteer.create(req.body).then((dbvolunteer) => {
      res.json(dbvolunteer);
    });
  });

  app.delete("/api/volunteer/:id", (req, res) => {
    db.volunteer
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbvolunteer) => {
        res.json(dbvolunteer);
      });
  });
};
