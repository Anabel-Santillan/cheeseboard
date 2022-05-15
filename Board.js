const {DataTypes, sequelize, Model} = require('./db');

//Make the Board Model:

class Board extends Model{};

Board.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER
}, {
    sequelize
});

module.exports = {
    Board
}