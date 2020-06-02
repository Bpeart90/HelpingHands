var db = require("../models");

module.exports = function (app) {
    app.get("/api/creator", function (req, res) {

        db.creator.findAll({
            include: [db.Post]
        }).then(function (dbCreator) {
            res.json(dbCreator);
        });
    });

    app.get("/api/creator/:id", function (req, res) {

        db.creator.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function (dbCreator) {
            res.json(dbCreator);
        });
    });

    app.post("/api/creator", function (req, res) {
        db.creator.create(req.body).then(function (dbCreator) {
            res.json(dbCreator);
        });
    });

    app.delete("/api/creator/:id", function (req, res) {
        db.creator.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCreator) {
            res.json(dbCreator);
        });
    });

};
