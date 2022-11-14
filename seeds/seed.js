const sequelize = require('../config/connection');
const { User, Shift, Hospital, } = require('../models');

const userData = require('./userData.json');
const hospitalData = require('./HospitalData.json')
const shiftData = require('./ShiftData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seeds user data AND encrypts passwords.
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  

  // Seeds hospital and shift data.
  const hospitals = await Hospital.bulkCreate(hospitalData);
  const shift = await Shift.bulkCreate(shiftData);
  
  // Seeds relationships between user and their favorite other users, shifts, and hospitals.
  await users[0].addFavoriteUsers([2,3]);
  await users[0].addHospital(1);
  await users[0].addShifts([29, 31, 33]);

  await users[1].addFavoriteUser(1);
  await users[1].addHospitals([1,2]);
  await users[1].addShifts([29, 31, 33]);

  await users[2].addFavoriteUsers([1,3]);
  await users[2].addHospital(1);
  await users[2].addShifts([36, 38, 40]);

  await users[3].addFavoriteUser(1);
  await users[3].addHospital(1);
  await users[3].addShifts([59, 61, 63, 64]);

  // Serialize the shift data.
  const shiftsObjArray = shift.map((aShift) => aShift.get({ plain: true }));
  const shiftsIdArray = shiftsObjArray.map(shiftObj => shiftObj.id);

  // Call function to eliminate the flex shifts.
  const noFlex = await eliminateFlex(shiftsIdArray);

  // Seeds relationships between hospitals and the shifts they have available.
  await hospitals[0].addShifts(shiftsIdArray.slice(0, 57));
  await hospitals[1].addShifts(shiftsIdArray);
  await hospitals[2].addShifts(shiftsIdArray);
  await hospitals[3].addShifts(shiftsIdArray.slice(0, 57));
  await hospitals[4].addShifts(noFlex);

  process.exit(0);

};

function eliminateFlex(shiftsArray) {
  // Create array with no "flex" schedule option.
  const noFlexOneWeek = shiftsArray.slice(0, 21);
  const noFlexTwoWeek = shiftsArray.slice(28, 49);
  const noFlexThreeWeek = shiftsArray.slice(56, 77);
  const noFlexFourWeek = shiftsArray.slice(84, 105);

  const noFlex = noFlexOneWeek.concat(noFlexTwoWeek.concat(noFlexThreeWeek.concat(noFlexFourWeek)));

  return noFlex;
};




seedDatabase();