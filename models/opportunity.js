module.exports = (sequelize, DataTypes) => {
  let opportunity = sequelize.define("opportunity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [7, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    areaOfNeed: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    backgroundRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  opportunity.associate = (models) => {
    opportunity.belongsTo(models.coordinator, {
      foreignKey: {
        allowNull: false,
      },
    });

    opportunity.belongsTo(models.volunteer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return opportunity;
};
