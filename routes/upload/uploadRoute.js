let express = require('express');
let router = express.Router();

let upload = require('../../controllers/upload/upload');
let slice = require("../../lib/common").slice;

let allowAccess = require("../../middlewares/allowAccess").allowAccess;
let multipart = require('connect-multiparty');
let multipartMiddleware = multipart();

router.all('/uploadFile', allowAccess, multipartMiddleware, function(req, res, next) {
    upload.uploadFile(req, res, next);
});


module.exports = router;
