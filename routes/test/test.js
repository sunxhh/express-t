let express = require('express');
let router = express.Router();


let allowAccess = require("../../middlewares/allowAccess").allowAccess;

router.all('/test1', allowAccess, function(req, res, next) {
    res.send(req.__body);
});


module.exports = router;
