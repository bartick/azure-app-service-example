const nodemailer = require("nodemailer");

const {
    email,
    password,
    host,
    portHost
} = require('./config');

const transporter = nodemailer.createTransport({
    host: host,
    port: portHost,
    secure: true,
    auth: {
        user: email,
        pass: password
    }
});

module.exports = transporter;