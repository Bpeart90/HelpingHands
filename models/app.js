module.exports = function (sequelize, DataTypes) {
    var app = sequelize.define("app", {
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
    app.associate = function (models) {

        app.belongsTo(models.volunteer, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return app;
}