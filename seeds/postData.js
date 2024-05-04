const { Post } = require('../models');

const postData = [
  {
    post_date: 'June 21, 2021 17:00:00',
    title: 'My first tech post',
    content: 'Through both trials and tribulations, I have posted my first blog post',
    user_id: 1,
  },
  {
    post_date: 'June 24, 2022 13:12:00',
    title: 'Is this blog alive?',
    content: `Why isn't anyone using it?`,
    user_id: 2,
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
