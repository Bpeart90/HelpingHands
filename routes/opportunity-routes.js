let db = require("../models");


module.exports = (app) => {

    app.get("/api/opportunity", (req, res) => {
        var query = {};
        if (req.query.creator_id) {
            query.creatorId = req.query.creator_id;
        }

        db.opportunity.findAll({
            where: query,
            include: [db.Creator]
        }).then((dbopportunity) => {
            res.json(dbopportunity);
        });
    });


    app.get("/api/Opportunity/:id", (req, res) => {

        db.opportunity.findOne({
            where: {
                id: req.params.id
            },
            include: [db.creator]
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
