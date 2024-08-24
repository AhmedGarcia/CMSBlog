const { Comment } = require('../models');

const commentData = [
    {
        content: 'This is really insightful! I\'ve been looking into JavaScript frameworks recently, and this has given me a lot to think about.',
        post_id: 1,
        user_id: 2
    },
    {
        content: 'RESTful APIs have always been a bit confusing to me, but this explanation makes it much clearer. Thanks!',
        post_id: 2,
        user_id: 3
    },
    {
        content: 'Version control is a lifesaver. Git has saved me from so many potential disasters in my projects.',
        post_id: 3,
        user_id: 4
    },
    {
        content: 'The future of web development sounds exciting, especially with serverless architecture. Can\'t wait to dive deeper into it!',
        post_id: 4,
        user_id: 5
    },
    {
        content: 'I\'ve been considering learning TypeScript, and this post just convinced me to take the plunge. Thanks for the motivation!',
        post_id: 5,
        user_id: 6
    },
    {
        content: 'Automation is indeed the backbone of DevOps. I can\'t imagine going back to manual processes after experiencing the benefits of CI/CD.',
        post_id: 6,
        user_id: 7
    },
    {
        content: 'GraphQL is a game-changer. I love how it simplifies data fetching, especially in complex applications.',
        post_id: 7,
        user_id: 8
    },
    {
        content: 'Responsive design is something I\'m still mastering, but this post has given me some great tips to improve my skills.',
        post_id: 8,
        user_id: 9
    },
    {
        content: 'Microservices have always intrigued me. This post does a great job of breaking down the benefits and challenges.',
        post_id: 9,
        user_id: 10
    },
    {
        content: 'CSS Grid and Flexbox are absolute lifesavers for layout design. They make it so much easier to create responsive websites.',
        post_id: 10,
        user_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;