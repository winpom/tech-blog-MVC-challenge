const sequelize = require('../config/connection');
// const { User } = require('../models');
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

// const userData = require('./userData.json')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedAll();
