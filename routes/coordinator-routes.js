let db = require("../models");

module.exports = (app) => {
    app.get("/api/coordinator", (req, res) => {

        db.coordinator.findAll({
            include: [db.opportunity]
        }).then((dbcoordinator) => {
            res.json(dbcoordinator);
        });
    });

    app.get("/api/coordinator/:id", (req, res) => {

        db.coordinator.findOne({
            where: {
                id: req.params.id
            },
            include: [db.opportunity]
        }).then((dbcoordinator) => {
            res.json(dbcoordinator);
        });
    });

    app.post("/api/coordinator", (req, res) => {
        db.coordinator.create(req.body).then((dbcoordinator) => {
            res.json(dbcoordinator);
        });
    });

    app.delete("/api/coordinator/:id", (req, res) => {
        db.coordinator.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbcoordinator) => {
            res.json(dbcoordinator);
        });
    });

};
