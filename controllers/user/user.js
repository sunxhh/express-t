let user = require("../../db/user/user");
exports.addUser = function(req, res, next) {
    let body = req.body;
    console.log(body);
    res.send("aaa");
};

exports.getUsers = function(req, res, next) {
    user.getUsers().then((result) => {
        res.sendJSON(result);
    }).catch((result) => {
        res.sendJSON(result);
    });
};

exports.getUserById = function(req, res, next) {
    let body = req.body;
    console.log(body);
    res.send("aaa");
};

exports.updateUser = function(req, res, next) {
    let body = req.body;
    console.log(body);
    res.send("aaa");
};
