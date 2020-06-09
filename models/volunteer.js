module.exports = (sequelize, DataTypes) => {
    let volunteer = sequelize.define("volunteer", {
        name: DataTypes.STRING,
        role: {
            Type: DataTypes.BOOLEAN,
            defualtValue: true
        }
    });

    volunteer.associate = (models) => {
        volunteer.hasMany(models.opportunity, {
            onDelete: "cascade"
        });
    };

    return volunteer;
};