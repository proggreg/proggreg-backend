"use strict"
var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const {
    nextTick
} = require('process');

router.get('/CV', (req, res, next) => {
    var cv = path.resolve('../proggreg-backend/assets/CV.pdf');
    fs.readFile(cv, (err, data) => {
        if (err) {
            res.status(404).json({
                errorMessage: "File not found"
            })
            next(err);
        } else {
            var base64String = new Buffer.from(data).toString("base64");
            res.send(base64String);
        }
    });
})

module.exports = router;