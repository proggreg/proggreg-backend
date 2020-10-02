require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");


// Nodemailer OAuth2 Config
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.email,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.refreshToken,
        accessToken: process.env.accessToken
    }
});

// Receive contact form and send email 
router.post('/send', (req, res, next) => {

    let mailOptions = {
        to: 'gregfieldwork@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message + "\n From: " + req.body.name + "\n Email: " + req.body.email
    }

    smtpTransport.sendMail(mailOptions, function (err) {
        // TODO better error handling may be needed
        if (err) {
            console.log({
                err
            });
            res.status(404).json("Problem sending email");
        } else {
            res.send("Email sent successfully")
        }
        smtpTransport.close();
    });
});

module.exports = router;