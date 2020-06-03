var db = require("../models");

module.exports = function (app) {
    app.get("/api/volunteer", function (req, res) {

        db.volunteer.findAll({
            include: [db.app]
        }).then(function (dbvolunteer) {
            res.json(dbvolunteer);
        });
    });

    app.get("/api/volunteer/:id", function (req, res) {

        db.volunteer.findOne({
            where: {
                id: req.params.id
            },
            include: [db.app]
        }).then(function (dbvolunteer) {
            res.json(dbvolunteer);
        });
    });

    app.post("/api/volunteer", function (req, res) {
        db.volunteer.create(req.body).then(function (dbvolunteer) {
            res.json(dbvolunteer);
        });
    });

    app.delete("/api/volunteer/:id", function (req, res) {
        db.volunteer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbvolunteer) {
            res.json(dbvolunteer);
        });
    });

};
