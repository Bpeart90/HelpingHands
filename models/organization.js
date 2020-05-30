module.exports = function (sequelize, DataTypes) {
    var organization = sequelize.define("organization", {
        organizationName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        number: {
            type: DataTypes.INTER,
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
    organization.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        organization.belongsTo(models.creator, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return organization;
}