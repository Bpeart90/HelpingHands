let bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  let volunteer = sequelize.define(
    "volunteer",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        },
      },
    }
  );

  volunteer.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  volunteer.addHook("beforeCreate", function (volunteer) {
    volunteer.password = bcrypt.hashSync(
      volunteer.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  volunteer.associate = (models) => {
    volunteer.hasMany(models.opportunity, {
      onDelete: "cascade",
    });
  };

  return volunteer;
};
