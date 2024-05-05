const { Comment } = require('../models');

const commentData = [
  {
    content: "I've seen better in my kindergartener's coding class",
    post_id: 1,
    user_id: 2,
  },
  {
    content: "This blog is terrible",
    post_id: 1,
    user_id: 4,
  },
  {
    content: "Nah it's dead",
    post_id: 2,
    user_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
