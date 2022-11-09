const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hospital extends Model {}

Hospital.init(
  {
<<<<<<< HEAD
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
=======
    hospital_name: {
        type: DataTypes.STRING,
        allowNull: false,
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
},
>>>>>>> f49078cdbfd315252b2c999c5539783c1377d23a
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hospital',
  }
<<<<<<< HEAD
);

=======


);

>>>>>>> f49078cdbfd315252b2c999c5539783c1377d23a
module.exports = Hospital;
