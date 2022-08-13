// Config with the default data of the database is used by Sequelize
require('dotenv').config()

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "MadMax12",
    DB: "testdb",
    dialect: 'postgres',
    development: {
      HOST: "localhost",
      USER: "postgres",
      PASSWORD: "MadMax12",
      DB: "testdb",
      dialect: 'postgres',
      use_env_variable: 'DATABASE_URL'
      },
  };