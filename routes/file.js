"use strict"
var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/CV', (req, res) => {
    var cv = path.resolve('../proggreg-backend/assets/CV.pdf');
    var binaryData = fs.readFileSync(cv);
    var base64String = new Buffer.from(binaryData).toString("base64");

    res.send(base64String);
})

module.exports = router;