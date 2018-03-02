let express = require('express');
let router = express.Router();

let readStatic = require("../../controllers/static/static");

router.all('*', function(req, res, next) {
    readStatic(req, res, next);
});


module.exports = router;
