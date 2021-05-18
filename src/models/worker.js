module.exports = (connection, DataTypes) => {
  const schema = {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [8,],
      }
    },
  };

  const WorkerModel = connection.define("Worker", schema);
  return WorkerModel;
}
