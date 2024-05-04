const { Comment } = require('../models');

const commentData = [
  {
    comment_date: 'June 21, 2021 18:00:00',
    content: "I've seen better in my kindergartener's coding class",
    post_id: 1,
  },
  {
    comment_date: 'June 21, 2021 19:00:00',
    content: "This blog is terrible",
    post_id: 1,
  },
  {
    comment_date: 'May 21, 2023 9:00:00',
    content: "Nah it's dead",
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
