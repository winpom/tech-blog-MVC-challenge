const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, 
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 20,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      max: 500,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    modelName: 'post',
    hooks: {
      beforeCreate: async (post) => {
        post.post_date = new Date();
      },
    },
  }
);

module.exports = Post;
