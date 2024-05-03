const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_date: 'June 21, 2021 18:00:00',
    content: "I've seen better in my kindergartener's coding class",
    post_id: 1,
  },
  {
    id: 2,
    comment_date: 'June 21, 2021 19:00:00',
    content: "This blog is terrible",
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
