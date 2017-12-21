exports.uploadFile = function(req, res, next) {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    res.send("aaa");
};
