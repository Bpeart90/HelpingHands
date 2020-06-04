let db = require("../models");

module.exports = (app) => {
    app.get("/api/creator", (req, res) => {

        db.creator.findAll({
            include: [db.opportunity]
        }).then((dbcreator) => {
            res.json(dbcreator);
        });
    });

    app.get("/api/creator/:id", (req, res) => {

        db.creator.findOne({
            where: {
                id: req.params.id
            },
            include: [db.opportunity]
        }).then((dbcreator) => {
            res.json(dbcreator);
        });
    });

    app.post("/api/creator", (req, res) => {
        db.creator.create(req.body).then((dbcreator) => {
            res.json(dbcreator);
        });
    });

    app.delete("/api/creator/:id", (req, res) => {
        db.creator.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbcreator) => {
            res.json(dbcreator);
        });
    });

};
