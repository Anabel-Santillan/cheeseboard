const {DataTypes, sequelize, Model} = require('./db');

//Define the User model:

class User extends Model{};

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
},{
    sequelize
})

module.exports = {
    User
};