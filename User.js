const { Board } = require('./Board');
const {DataTypes, sequelize, Model} = require('./db');

//Define the User model:

class User extends Model{};

// Initializing one to Many relationship, User can have many boards:


User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
},{
    sequelize
})

module.exports = {
    User
};