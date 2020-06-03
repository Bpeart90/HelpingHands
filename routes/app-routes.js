var db = require("../models");


module.exports = function (app) {

    app.get("/api/app", function (req, res) {
        var query = {};
        if (req.query.volunteer_id) {
            query.volunteerId = req.query.volunteer_id;
        }

        db.app.findAll({
            where: query,
            include: [db.volunteer]
        }).then(function (dbvolunteer) {
            res.json(dbvolunteer);
        });
    });


    app.get("/api/app/:id", function (req, res) {

        db.app.findOne({
            where: {
                id: req.params.id
            },
            include: [db.volunteer]
        }).then(function (dbapp) {
            res.json(dbapp);
        });
    });

    app.post("/api/app", function (req, res) {
        db.app.create(req.body).then(function (dbapp) {
            res.json(dbapp);
        });
    });

    app.delete("/api/app/:id", function (req, res) {
        db.app.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbapp) {
            res.json(dbapp);
        });
    });

    app.put("/api/opportunity", function (req, res) {
        db.app.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbapp) {
                res.json(dbapp);
            });
    });
};
