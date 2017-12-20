var express = require('express');
var router = express.Router();


router.post('/uploadFile', function (req, res, next) {
    res.send("aaaa");
});

module.exports = router;