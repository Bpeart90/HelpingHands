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
      type: DataTypes.STRING,
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
    claimed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    claimedBy: {
      type: DataTypes.INTEGER,
      defaultValue: false,
      allowNull: true,
    }
  });

  opportunity.associate = (models) => {
    opportunity.belongsTo(models.coordinator, {
      foreignKey: {
        allowNull: true,
      },
    });

    opportunity.belongsTo(models.volunteer, {
      foreignKey: {
        allowNull: true,
      },
    });
  };
  return opportunity;
};
