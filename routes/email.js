require('dotenv').config();
var express = require('express');
var app = express();
var router = express.Router();
// var mailer = require('express-mailer');
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.email_password
    }
});

// Receive contact form and send email 
router.post('/send', (req, res, next) => {
    let mailOptions = {
        from: req.body.from,
        to: 'gregfieldwork@gmail.com',
        subject: req.body.subject,
        text: req.body.msg
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.send("Email sent successfully")
        }
    });
});

module.exports = router;