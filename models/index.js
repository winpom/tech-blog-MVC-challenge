const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id', 
});

Comment.belongsTo(Post, {
  as: 'post',
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };
