require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // For self-signed certificates
            },
        },
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





