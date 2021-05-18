module.exports = (connection, DataTypes) => {
  const schema = {
    award_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  };

  const AwardModel = connection.define("Award", schema);
  return AwardModel;
}
