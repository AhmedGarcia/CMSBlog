require('dotenv').config();
console.log("Database URL:", process.env.DATABASE_URL); 
const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // For self-signed certificates
        }
    },
});

module.exports = sequelize;

