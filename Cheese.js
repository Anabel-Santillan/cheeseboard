const {DataTypes, sequelize, Model} = require('./db');

//Define the Cheese model:

class Cheese extends Model{};

Cheese.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
},{
    sequelize
});

module.exports = {
    Cheese
};