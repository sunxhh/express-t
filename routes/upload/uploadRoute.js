var express = require('express');
var router = express.Router();
var upload = require('../../controllers/upload/upload');
var slice = require("../../lib/common").slice;


router.all('/uploadFile', function(req, res, next) {
    upload.uploadFile.apply(null, slice(arguments));
});


module.exports = router;
