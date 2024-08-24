const { User } = require('../models');

const userData = [
    {
        username: 'goku_kakarot',
        email: 'goku@dbz.com',
        password: 'password123'
    },
    {
        username: 'solid_snake',
        email: 'snake@mg.com',
        password: 'password123'
    },
    {
        username: 'cloud_strife',
        email: 'cloud@ffvii.com',
        password: 'password123'
    },
    {
        username: 'samus_aran',
        email: 'samus@metroid.com',
        password: 'password123'
    },
    {
        username: 'vegeta_prince',
        email: 'vegeta@dbz.com',
        password: 'password123'
    },
    {
        username: 'kratos_sparta',
        email: 'kratos@gow.com',
        password: 'password123'
    },
    {
        username: 'sonic_speed',
        email: 'sonic@sega.com',
        password: 'password123'
    },
    {
        username: 'link_hero',
        email: 'link@hyrule.com',
        password: 'password123'
    },
    {
        username: 'piccolo_namek',
        email: 'piccolo@dbz.com',
        password: 'password123'
    },
    {
        username: 'mario_bros',
        email: 'mario@nintendo.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;