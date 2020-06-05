module.exports = (sequelize, DataTypes) => {
    let volunteer = sequelize.define("volunteer", {
        name: DataTypes.STRING
    });

    volunteer.associate = (models) => {
        volunteer.hasMany(models.oppportunity, {
            onDelete: "cascade"
        });
    };

    return volunteer;
};