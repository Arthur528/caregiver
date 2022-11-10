const { Shift } = require('../models');

const shiftdata = [
  {
   shift_time: '7:00am - 7:30pm',
   days_of_week: ''
  },
  {
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
  },
];

const seedshift = () => Shift.bulkCreate(shiftdata);

module.exports = seedshift;
