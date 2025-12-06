const { sequelize } = require("../config/db");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
const Like = require("./Like");

// a user  with - many Posts
User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "author" });

// a user with many Comments
User.hasMany(Comment, { foreignKey: "userId", as: "comments" });
Comment.belongsTo(User, { foreignKey: "userId", as: "author" });

// a Post with many Comments
Post.hasMany(Comment, { foreignKey: "postId", as: "comments" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });

// a user with many Likes
User.hasMany(Like, { foreignKey: "userId", as: "likes" });
Like.belongsTo(User, { foreignKey: "userId", as: "user" });

// a post with many Likes
Post.hasMany(Like, { foreignKey: "postId", as: "likes" });
Like.belongsTo(Post, { foreignKey: "postId", as: "post" });

async function syncModels() {
  await sequelize.sync({ alter: true });
  console.log("All models were synchronized");
}

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
  Like,
  syncModels,
};
