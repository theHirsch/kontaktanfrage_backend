require('dotenv').config()

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "testdb",
    dialect: "postgres",
    development: {
      HOST: "localhost",
      USER: "postgres",
      PASSWORD: "123",
      DB: "testdb",
      dialect: "postgres",
      use_env_variable: 'DATABASE_URL'
      },
  };