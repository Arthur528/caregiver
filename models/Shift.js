const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Shift extends Model {}

Shift.init(
    {
        work_shift: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        schedule_duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        underscored: true,
    }
);

module.exports = Shift;