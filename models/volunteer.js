module.exports = (sequelize, DataTypes) => {
  let volunteer = sequelize.define("volunteer", {
    volunteer_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 40],
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 16],
      },
    },
  });

  volunteer.associate = (models) => {
    volunteer.hasMany(models.opportunity, {
      onDelete: "cascade",
    });
  };

  return volunteer;
};
