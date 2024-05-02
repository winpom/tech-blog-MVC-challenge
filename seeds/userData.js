const { User } = require('../models');

const userData = [
  {
    username: 'winpom',
    email: 'win@pom.com',
    password: 'tbd',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
