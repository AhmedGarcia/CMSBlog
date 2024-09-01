require('dotenv').config();
const Sequelize = require('sequelize');

// Log the database connection details for troubleshooting
console.log("Attempting to connect to the database with the following details:");
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "****" : "Not Set");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);

let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
    });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            port: process.env.DB_PORT || 5432,
        }
    );
}

module.exports = sequelize;



