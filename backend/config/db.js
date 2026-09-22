const sequelize = require('sequelize');

const db = new sequelize({
    dialect: 'sqlite',
    storage: process.env.DB || './database.sqlite'
});

module.exports = db;