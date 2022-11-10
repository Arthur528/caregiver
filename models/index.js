const Hospital = require('./Hospital.js');
const Shift = require('./Shift.js');
const User = require('./User.js');
const UserShift = require('./UserShift.js');

User.belongsToMany(Hospital, {
    through: "UserHospital",
})

Hospital.belongsToMany(User, {
    through: "UserHospital",
})

User.belongsToMany(Shift, {
    through: UserShift,
})

Shift.belongsToMany(User, {
    through: UserShift,
})

Hospital.belongsToMany(Shift, {
    through: "HospitalShift",
})

Shift.belongsToMany(Hospital, {
    through: "HospitalShift",
})

module.exports = { User, Shift, Hospital, UserShift };
