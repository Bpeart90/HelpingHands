module.exports = function (sequelize, DataTypes) {
    var volunteer = sequelize.define("volunteer", {
        name: DataTypes.STRING
    });

    volunteer.associate = function (models) {
        volunteer.hasMany(models.app, {
            onDelete: "cascade"
        });
    };

    return volunteer;
};