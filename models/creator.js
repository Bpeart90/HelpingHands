module.exports = function (sequelize, DataTypes) {
    var creator = sequelize.define("creator", {
        name: DataTypes.STRING
    });

    creator.associate = function (models) {
        creator.hasMany(models.opportunity, {
            onDelete: "cascade"
        });
    };

    return creator;
};