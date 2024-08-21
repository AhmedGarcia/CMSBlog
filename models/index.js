const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Assosiations between the models

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignkey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };