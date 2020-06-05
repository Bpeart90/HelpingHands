let db = require("../models");

module.exports = (app) => {
    app.get("/api/volunteer", (req, res) => {

        db.volunteer.findAll({
            include: [db.opportunity]
        }).then((dbvolunteer) => {
            res.json(dbvolunteer);
        });
    });

    app.get("/api/volunteer/:id", (req, res) => {

        db.volunteer.findOne({
            where: {
                id: req.params.id
            },
            include: [db.opportunity]
        }).then((dbvolunteer) => {
            res.json(dbvolunteer);
        });
    });

    app.post("/api/volunteer", (req, res) => {
        db.volunteer.create(req.body).then((dbvolunteer) => {
            res.json(dbvolunteer);
        });
    });

    app.delete("/api/volunteer/:id", (req, res) => {
        db.volunteer.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbvolunteer) => {
            res.json(dbvolunteer);
        });
    });
};
