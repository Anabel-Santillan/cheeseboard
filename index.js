const { sequelize, DataTypes, Model } = require('./db');
const {Cheese} = require('./Cheese');
const {Board} = require('./Board');
const {User} = require('./User');

//Board to User relationship (O-M)
Board.belongsTo(User);
User.hasMany(Board);

//Board to Cheese relationship (M-M)

let cheeseOnBoard = sequelize.define('cheeseOnBoard', {

}); 

Board.belongsToMany(Cheese,{through: "cheeseOnBoard"})

module.exports = {
    Board,
    User,
    Cheese
};