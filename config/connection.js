const Sequelize = require('sequelize');
require('dotenv').config();

// Establishes a connection to the database using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || '127.0.0.1', // Fallback to '127.0.0.1' if DB_HOST is not set
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432, // Fallback to 5432 if DB_PORT is not set
    logging: false, // Optionally disable logging for a cleaner output
});

module.exports = sequelize;
