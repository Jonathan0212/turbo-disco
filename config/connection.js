const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "pets_db",
  "root",
  "CarToy2001$",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;