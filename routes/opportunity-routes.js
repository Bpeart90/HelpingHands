let db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = (app) => {
  app.get("/opportunity", isAuthenticated, (req, res) => {
    console.log("this is the user", req.user);
    var query = {};
    if (req.query.coordinator_id) {
      query.coordinatorId = req.query.coordinator_id;
    }

    db.opportunity
      .findAll({
        raw: true,
      })
      .then((dbopportunity) => {
        res.render("opportunity", {
          opportunities: dbopportunity,
          title: "Opportunity Page",
          style: "home.css",
        });
      });
  });

  app.get("/claimedOpps", isAuthenticated, (req, res) => {
    var query = { claimedBy: req.user.id };
    if (req.query.coordinator_id) {
      query.coordinatorId = req.query.coordinator_id;
    }

    db.opportunity
      .findAll({
        raw: true,
        where: query,
      })
      .then((dbopportunity) => {
        res.render("claimedOpps", {
          opportunities: dbopportunity,
          title: "Claimed",
          style: "home.css",
        });
      });
  });

  app.get("/opportunity/api:id", (req, res) => {
    db.opportunity
      .findOne({
        where: {
          id: req.params.id,
        },
        include: [db.coordinator, db.volunteer],
      })
      .then((dbopportunity) => {
        res.json(dbopportunity);
      });
  });

  app.post("/opportunity/api", (req, res) => {
    db.opportunity.create(req.body).then((dbopportunity) => {
      res.json(dbopportunity);
    });
  });

  app.delete("/opportunity/api:id", (req, res) => {
    db.opportunity
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((dbopportunity) => {
        res.json(dbopportunity);
      });
  });

  app.put("/opportunity/api", (req, res) => {
    db.opportunity
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then((dbopportunity) => {
        res.json(dbopportunity);
      });
  });
};
