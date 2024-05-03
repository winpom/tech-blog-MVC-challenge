const { User } = require('../models');

const userData = [
        {
          "id": 1,
          "username": "winpom",
          "email": "win@pom.com",
          "password": "password123"
        },
        {
          "id": 2,
          "username": "Sal",
          "email": "sal@hotmail.com",
          "password": "password12345"
        },
        {
          "id": 3,
          "username": "Lernantino",
          "email": "lernantino@gmail.com",
          "password": "password12345"
        },
        {
          "id": 4,
          "username": "Amiko",
          "email": "amiko2k20@aol.com",
          "password": "password12345"
        },
        {
          "id": 5,
          "username": "Jordan",
          "email": "jordan99@msn.com",
          "password": "password12345"
        },
        {
          "id": 6,
          "username": "Blake",
          "email": "the_blake@yahoo.com",
          "password": "password12345"
        }
];
const seedUsers = async () => await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
