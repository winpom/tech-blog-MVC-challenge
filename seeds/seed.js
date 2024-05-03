const sequelize = require('../config/connection');
const { User } = require('../models');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedPosts();
  
  await seedComments();

  process.exit(0);
};

seedAll();
