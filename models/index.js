const Hospital = require('./Hospital');
const Shift = require('./shift');
const User = require('./user');
Hospital = require('./hospital');
User = require("./user");

User.belongsToMany(Hospital, {
    through: "UserHospital",
})

Hospital.belongsToMany(User, {
    through: "UserHospital",
})

User.belongsToMany(Shift, {
    through: "UserShift",
})

Shift.belongsToMany(User, {
    through: "UserShift",
})

Hospital.belongsToMany(Shift, {
    through: "HospitalShift",
})

Shift.belongsToMany(Hospital, {
    through: "HospitalShift",
})

module.exports = { User, Shift, Hospital };
