const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'post_id',
});

Post.belongsTo(User, {
  foreignKey: 'post_id',
});

module.exports = { User, Post };
