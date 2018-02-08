let express = require('express');
let router = express.Router();

let upload = require('../../controllers/upload/upload');

let allowAccess = require("../../middlewares/allowAccess").allowAccess;

router.all('/uploadFile', allowAccess, function (req, res, next) {
    upload.uploadFile(req, res, next);
});


module.exports = router;