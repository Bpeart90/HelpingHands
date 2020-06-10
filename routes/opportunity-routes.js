let db = require("../models");
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = (app) => {

    app.get("/api/opportunity", (req, res) => {
        var query = {};
        if (req.query.coordinator_id) {
            query.coordinatorId = req.query.coordinator_id;
        }

        db.opportunity.findAll({
            raw: true
            // where: query,
            // include: [db.coordinator, db.volunteer]
        }).then((dbopportunity) => {
            // console.log(dbopportunity);
            res.render("opportunity", { opportunities: dbopportunity });
        });
    });


    app.get("/api/opportunity/:id", (req, res) => {

        db.opportunity.findOne({
            where: {
                id: req.params.id
            },
            include: [db.coordinator, db.volunteer]
        }).then((dbopportunity) => {
            res.json(dbopportunity);
        });
    });

    app.post("/api/opportunity", (req, res) => {
        db.opportunity.create(req.body).then((dbopportunity) => {
            res.json(dbopportunity);
        });
    });

    app.delete("/api/opportunity/:id", (req, res) => {
        db.opportunity.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbopportunity) => {
            res.json(dbopportunity);
        });
    });

    app.put("/api/opportunity", (req, res) => {
        db.opportunity.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then((dbopportunity) => {
                res.json(dbopportunity);
            });
    });
};
