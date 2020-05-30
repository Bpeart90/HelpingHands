module.exports = function (sequelize, DataTypes) {
    var volunteer = sequelize.define("volunteer", {
        name: {
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
        interest: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        background: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return volunteer;
}