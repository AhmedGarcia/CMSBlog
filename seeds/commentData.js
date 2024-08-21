const { Comment } = require('../models');

const commentData = [
    {
        content: 'Great post! Thank you for the info!',
        user_id: 1,
        post_id: 1,
    },
    {
        content: 'Very informative and clear.',
        user_id: 2,
        post_id: 2,
      },
      {
        content: 'I learned so much with this one!.',
        user_id: 3,
        post_id: 3,
      },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;