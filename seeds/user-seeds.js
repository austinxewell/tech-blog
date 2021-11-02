const { User } = require('../models');

const userData = [
    {
        username: 'dwightschrute',
        email: 'dwight@gmail.com',
        password: 'password1'
    },
    {
        username: 'jimhalpert',
        email: 'jim@gmail.com',
        password: 'password1'
    },
    {
        username: 'michalescott',
        email: 'michael@gmail.com',
        password: 'password1'
    },
    {
        username: 'pambeesly',
        email: 'pam@gmail.com',
        password: 'password1'
    },
    {
        username: 'kevinmalone',
        email: 'kevin@gmail.com',
        password: 'password1'
    },
    {
        username: 'tobyflenderson',
        email: 'toby@gmail.com',
        password: 'password1'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;