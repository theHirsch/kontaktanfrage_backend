// With the config defaults used, Sequelize will create a column with the model we determined
const fs = require('fs');
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tests = require("./test.model.js")(sequelize, Sequelize);
module.exports = db;