module.exports = (connection, DataTypes) => {
  const schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    awarding_body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  };

  const QualificationModel = connection.define("Qualification", schema);
  return QualificationModel;
}
