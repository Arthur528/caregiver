const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hospital extends Model {}

Hospital.init(
  {
    hospital_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    street_address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    zip_code: {
      type: DataTypes.STRING,
    },
},
  {
    sequelize,
    underscored: true,
  }
);

module.exports = Hospital;
