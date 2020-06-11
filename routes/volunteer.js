let db = require("../models");
let passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = (app) => {
    app.get("/api/volunteer", (req, res) => {

        db.volunteer.findAll({
            include: [db.opportunity]
        }).then((dbvolunteer) => {
            res.json(dbvolunteer);
        });
    });
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });
    app.get("api/volunteer/claimOpportunity", isAuthenticated, (req, res) => {
        // Do something here
    })
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
