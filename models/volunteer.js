module.exports = (sequelize, DataTypes) => {
    let volunteer = sequelize.define("volunteer", {
        name: DataTypes.STRING
    });

    volunteer.associate = (models) => {
        volunteer.hasMany(models.opportunity, {
            onDelete: "cascade"
        });
    };

    return volunteer;
};