module.exports = (sequelize, DataTypes) => {
    let creator = sequelize.define("creator", {
        name: DataTypes.STRING,
        role: {
            Type: DataTypes.BOOLEAN,
            defualtValue: false
        }
    });

    creator.associate = (models) => {
        creator.hasMany(models.opportunity, {
            onDelete: "cascade"
        });
    };

    return creator;
};