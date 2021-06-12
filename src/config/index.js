require('dotenv').config();

const config = {
    DEV: process.env.NODE_ENV !== 'production',
    HOST: process.env.HOST,
    PORT: process.env.PORT
}

module.exports = config;