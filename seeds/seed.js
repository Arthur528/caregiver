const sequelize = require('../config/connection');
const { User, Shift, Hospital, UserShift } = require('../models');

const userData = require('./userData.json');
const hospitalData = require('./HospitalData.json')
const shiftData = require('./shiftData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const hospitals = await Hospital.bulkCreate(hospitalData);
  const shift = await Shift.bulkCreate(shiftData);

  const usershift = await UserShift.bulkCreate([
    {
      day_of_week: 'Monday',
      UserId: 1,
      ShiftId: 1,
    }
  ])

  process.exit(0);
};


seedDatabase();