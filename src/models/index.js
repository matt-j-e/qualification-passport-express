const Sequelize = require("sequelize");
const WorkerModel = require("./worker");
const QualificationModel = require("./qualification");
const AwardModel = require("./award");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, CLEARDB_DATABASE_URL } = process.env;

const setupDatabase = () => {
  const connection = CLEARDB_DATABASE_URL ?
	new Sequelize(CLEARDB_DATABASE_URL) :
	new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        logging: false,
    });

  const Worker = WorkerModel(connection, Sequelize);
  const Qualification = QualificationModel(connection, Sequelize);
  const Award = AwardModel(connection, Sequelize);

  Worker.hasMany(Award);
  Award.belongsTo(Worker);
  Award.belongsTo(Qualification);

  connection.sync({ alter: true });

  return {
    Worker,
    Qualification,
    Award,
  };
};

module.exports = setupDatabase();
