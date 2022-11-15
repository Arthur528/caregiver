const Hospital = require('./Hospital.js');
const Shift = require('./Shift.js');
const User = require('./User.js');

// User has many to many relationship with users for our "favorites" functionality.
User.belongsToMany(User, {
    through: "UserUser",
    as: "FavoriteUser"
});

// A user can belong to many hospitals (different shifts, in same area, etc.).
User.belongsToMany(Hospital, {
    through: "UserHospital"
});

// A hospital has many users (many nurses work there).
Hospital.belongsToMany(User, {
    through: "UserHospital"
});

// A user has multiple shifts.
User.belongsToMany(Shift, {
    through: "UserShift"
});

// A shift has multiple users (nurses) on it.
Shift.belongsToMany(User, {
    through: "UserShift"
});

// A hospital has multiple shifts that need to be worked.
Hospital.belongsToMany(Shift, {
    through: "HospitalShift"
});

// A work shift of the same hours occurs at many hospitals.
Shift.belongsToMany(Hospital, {
    through: "HospitalShift"
});

module.exports = { User, Shift, Hospital };
