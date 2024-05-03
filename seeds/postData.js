const { Post } = require('../models');

const postData = [
  {
    id: 1,
    post_date: 'June 21, 2021 17:00:00',
    title: 'My first tech post',
    content: 'Through both trials and tribulations, I have posted my first blog post',
    user_id: 1,
    comments: [ 1, 2 ]
  },
];
'This blog is terrible', "I've seen better in my kindergartener's coding class"
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
