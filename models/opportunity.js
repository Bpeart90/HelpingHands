module.exports = (sequelize, DataTypes) => {
    let opportunity = sequelize.define("opportunity", {
        organizationName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [7, 15]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        areaOfNeed: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        backgroundRequired: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    opportunity.associate = (models) => {

        opportunity.belongsTo(models.creator, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return opportunity;
}