var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/CV', (req, res) => {
    res.download(path.resolve('../proggreg-backend/assets/CV.pdf'), (err) => {
        if (err) {
            console.log(err);
        }
        return;
    });
})

module.exports = router;