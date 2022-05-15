const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false
});

module.exports = {
    sequelize,
    DataTypes,
    Model
};