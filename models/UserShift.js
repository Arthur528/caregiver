const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserShift extends Model {}

UserShift.init(
  {
    day_of_week: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
},
  {
    sequelize,
  }
);

module.exports = UserShift;