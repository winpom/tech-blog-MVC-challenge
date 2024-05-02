const { Post } = require('../models');

const postData = [
  {
    title: 'My first tech post',
    contents: 'Through both trials and tribulations, I have posted my first blog post',
    username: 'winpom',
    date: 'June 21, 2021 17:00:00',
    comments: ['This blog is terrible', "I've seen better in my kindergartener's coding class"]
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
