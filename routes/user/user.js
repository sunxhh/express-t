let express = require('express');
let router = express.Router();

let user = require('../../controllers/user/user');

router.all('/addUser', function(req, res, next) {
    user.addUser(req, res, next);
});

router.all('/getUserById', function(req, res, next) {
    user.getUserById(req, res, next);
});
router.all('/getUsers', function(req, res, next) {
    user.getUsers(req, res, next);
});

router.all('/updateUser', function(req, res, next) {
    user.updateUser(req, res, next);
});

module.exports = router;
