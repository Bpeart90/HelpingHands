var db = require("../models");


module.exports = function (app) {

    app.get("/api/opportunity", function (req, res) {
        var query = {};
        if (req.query.creator_id) {
            query.CreatorId = req.query.creator_id;
        }

        db.Opportunity.findAll({
            where: query,
            include: [db.Creator]
        }).then(function (dbOpportunity) {
            res.json(dbOpportunity);
        });
    });


    app.get("/api/Opportunity/:id", function (req, res) {

        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Creator]
        }).then(function (dbOpportunity) {
            res.json(dbOpportunity);
        });
    });

    app.post("/api/opportunity", function (req, res) {
        db.Opportunity.create(req.body).then(function (dbOpportunity) {
            res.json(dbOpportunity);
        });
    });

    app.delete("/api/opportunity/:id", function (req, res) {
        db.Opportunity.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbOpportunity) {
            res.json(dbOpportunity);
        });
    });

    app.put("/api/opportunity", function (req, res) {
        db.Opportunity.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbOpportunity) {
                res.json(dbOpportunity);
            });
    });
};
