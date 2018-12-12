var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'dare.ritesh@gmail.com',
        pass: 'nishadevi@123'
    }
});

module.exports = transporter;