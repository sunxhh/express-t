let express = require('express');
let router = express.Router();


let allowAccess = require("../../middlewares/allowAccess").allowAccess;

router.all('/test1', allowAccess, function(req, res) {
    res.sendJSON(req.body);
});


module.exports = router;
