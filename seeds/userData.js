const { User } = require('../models');

const userData = [
  { 
    username: 'space_invader',
    password: 'password123',
  },
  {
    username: 'liquid_snake',
    password: 'password456',
  },
  {
    username: 'lightning_mcqueen',
    password: 'password789',
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;