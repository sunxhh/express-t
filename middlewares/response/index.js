exports = module.exports = function(req, res, next) {
    res.sendJSON = function(data) {
        let response = {
            code: 200,
            data: data
        }
        res.send(JSON.stringify(response));
    }
    next();
};
