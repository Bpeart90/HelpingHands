var db = require("../models");

module.exports = function (app) {
    app.get("/api/creator", function (req, res) {

        db.creator.findAll({
            include: [db.opportunity]
        }).then(function (dbcreator) {
            res.json(dbcreator);
        });
    });

    app.get("/api/creator/:id", function (req, res) {

        db.creator.findOne({
            where: {
                id: req.params.id
            },
            include: [db.opportunity]
        }).then(function (dbcreator) {
            res.json(dbcreator);
        });
    });

    app.post("/api/creator", function (req, res) {
        db.creator.create(req.body).then(function (dbcreator) {
            res.json(dbcreator);
        });
    });

    app.delete("/api/creator/:id", function (req, res) {
        db.creator.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbcreator) {
            res.json(dbcreator);
        });
    });

};
