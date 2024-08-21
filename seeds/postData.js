const { Post } = require('../models');

const postData = [
    {
        title: 'Understanding JavaScript Closures',
        content: 'Closures are a fundamental concept in JavaScript...',
        user_id: 1,
      },
      {
        title: 'Getting Started with React',
        content: 'React is a powerful library for building user interfaces...',
        user_id: 2,
      },
      {
        title: 'The Future of Web Development',
        content: 'Web development is constantly evolving...',
        user_id: 3,
      },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;