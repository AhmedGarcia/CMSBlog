require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Username
    process.env.DB_PASSWORD, // Password
    {
        host: process.env.DB_HOST, // Hostname
        dialect: 'postgres', // Dialect (PostgreSQL in this case)
        port: process.env.DB_PORT || 5432, // Port number (default to 5432)
    }
);

module.exports = sequelize;

