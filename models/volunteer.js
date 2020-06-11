// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

// Creating our volunteer model
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
      // claimedOpps: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // }
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
    // {
    //   freezeTableName: true,
    //   instanceMethods: {
    //     generateHash(password) {
    //       return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //     },
    //     validPassword(password) {
    //       return bcrypt.compare(password, this.password);
    //     },
    //   },
    // }
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
