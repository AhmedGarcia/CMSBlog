const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('../commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n--- Database Synced ---\n');

    await seedUsers();
    console.log('\n---Users Seeded ---\n');

    await seedPosts();
  console.log('\n--- Posts Seeded ---\n');

  await seedComments();
  console.log('\n--- Comments Seeded ---\n');

  process.exit(0);
};

seedAll();

