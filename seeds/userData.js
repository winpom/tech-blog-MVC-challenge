const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'winpom',
    email: 'win@pom.com',
    password: 'tbd',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
