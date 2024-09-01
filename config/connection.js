require('dotenv').config();
console.log("Database URL:", process.env.DATABASE_URL); 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
});

module.exports = sequelize;

