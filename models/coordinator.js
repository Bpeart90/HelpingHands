const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    let coordinator = sequelize.define("coordinator", {
        name: DataTypes.STRING,
        role: {
            Type: DataTypes.BOOLEAN,
            defualtValue: false
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });

    coordinator.associate = (models) => {
        coordinator.hasMany(models.opportunity, {
            onDelete: "cascade"
        });
    };

    return coordinator;
};