const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Shift extends Model {}

Shift.init(
    {
        shift_hours: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        day_of_week: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hospital_location: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "shift",
    }
);

module.exports = Shift;