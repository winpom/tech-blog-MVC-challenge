const { Post } = require('../models');

const postData = [
  {
    title: 'My first tech post',
    content: 'Through both trials and tribulations, I have posted my first blog post',
    user_id: 1,
  },
  {
    title: 'Is this blog alive?',
    content: `Why isn't anyone using it?`,
    user_id: 2,
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
