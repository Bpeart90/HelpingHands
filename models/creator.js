module.exports = (sequelize, DataTypes) => {
    let creator = sequelize.define("creator", {
        name: DataTypes.STRING
    });

    creator.associate = (models) => {
        creator.hasMany(models.opportunity, {
            onDelete: "cascade"
        });
    };

    return creator;
};