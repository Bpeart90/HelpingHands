var db = require("../models");


module.exports = function (app) {

    app.get("/api/opportunity", function (req, res) {
        var query = {};
        if (req.query.creator_id) {
            query.creatorId = req.query.creator_id;
        }

        db.opportunity.findAll({
            where: query,
            include: [db.Creator]
        }).then(function (dbopportunity) {
            res.json(dbopportunity);
        });
    });


    app.get("/api/Opportunity/:id", function (req, res) {

        db.opportunity.findOne({
            where: {
                id: req.params.id
            },
            include: [db.creator]
        }).then(function (dbopportunity) {
            res.json(dbopportunity);
        });
    });

    app.post("/api/opportunity", function (req, res) {
        db.opportunity.create(req.body).then(function (dbopportunity) {
            res.json(dbopportunity);
        });
    });

    app.delete("/api/opportunity/:id", function (req, res) {
        db.opportunity.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbopportunity) {
            res.json(dbopportunity);
        });
    });

    app.put("/api/opportunity", function (req, res) {
        db.opportunity.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbopportunity) {
                res.json(dbopportunity);
            });
    });
};
