require('dotenv').config()

module.exports = {
    port: parseInt(process.env.PORT) || 3000,
    email: process.env.HOST_USER,
    password: process.env.HOST_PASSWORD,
    host: process.env.HOST,
    portHost: parseInt(process.env.PORT_HOST),
}