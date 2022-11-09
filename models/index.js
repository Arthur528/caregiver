<<<<<<< HEAD
const Hospital = require('./Hospital');
const Shift = require('./shift');
const User = require('./user');
Hospital = require('./hospital');
=======
const Blogpost = require('./blogpost');
const User = require('./user');
Comment = require('./comment');
>>>>>>> dev
User = require("./user");

User.belongsToMany(Hospital, {
    through: "UserHospital",
})

<<<<<<< HEAD
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
=======
User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project };
>>>>>>> dev
