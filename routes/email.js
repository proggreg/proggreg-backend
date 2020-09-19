require('dotenv').config();
const express = require('express');
const router = express.Router();
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

    if (transporter.options.auth.user === undefined || transporter.options.auth.pass === undefined) {
        res.status(404).json({
            error: "No credentials found"
        })
    }

    let mailOptions = {
        from: req.body.from,
        to: 'gregfieldwork@gmail.com',
        subject: req.body.subject,
        text: req.body.msg
    }
    try {
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                next(err);
            } else {
                res.send("Email sent successfully")
            }
        });
    } catch (err) {
        next(err)
    }
});

module.exports = router;