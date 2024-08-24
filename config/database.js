import Sequelize from 'sequelize';

const db_config = {
  username: "postgres",
  password: "root",
  database: "CalorieLogger",
  host: "127.0.0.1",
  dialect: "postgres",
  port: "5433"
}

export default new Sequelize(db_config.database, db_config.username, db_config.password, {
  host: db_config.localhost,
  dialect: db_config.dialect, // Change to your database type
  port: db_config.port
});