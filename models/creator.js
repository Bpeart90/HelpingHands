module.exports = function (sequelize, DataTypes) {
    var creator = sequelize.define("creator", {
        name: DataTypes.STRING
    });

    Author.associate = function (models) {
        Author.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return creator;
};