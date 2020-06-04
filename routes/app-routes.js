let db = require("../models");


module.exports = (app) => {

    app.get("/api/app", (req, res) => {
        var query = {};
        if (req.query.volunteer_id) {
            query.volunteerId = req.query.volunteer_id;
        }

        db.app.findAll({
            where: query,
            include: [db.volunteer]
        }).then((dbvolunteer) => {
            res.json(dbvolunteer);
        });
    });


    app.get("/api/app/:id", (req, res) => {

        db.app.findOne({
            where: {
                id: req.params.id
            },
            include: [db.volunteer]
        }).then((dbapp) => {
            res.json(dbapp);
        });
    });

    app.post("/api/app", (req, res) => {
        db.app.create(req.body).then((dbapp) => {
            res.json(dbapp);
        });
    });

    app.delete("/api/app/:id", (req, res) => {
        db.app.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbapp) => {
            res.json(dbapp);
        });
    });

    app.put("/api/opportunity", (req, res) => {
        db.app.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then((dbapp) => {
                res.json(dbapp);
            });
    });
};
