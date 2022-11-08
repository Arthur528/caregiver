// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Hospital extends Model {}

// Hospital.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//     description: {
//       type: DataTypes.STRING,
//     },
//     blog_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'hospital',
//   }
// );

// module.exports = Hospital;
