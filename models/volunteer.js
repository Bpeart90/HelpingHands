module.exports = (sequelize, DataTypes) => {
    let volunteer = sequelize.define("volunteer", {
        name: DataTypes.STRING
    });

    volunteer.associate = (models) => {
        volunteer.hasMany(models.app, {
            onDelete: "cascade"
        });
    };

    return volunteer;
};