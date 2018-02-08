exports = module.exports = function(req, res, next) {
    res.originSend = res.send;
    res.send = function(data) {
        let response = {
            code: 200,
            data: data
        }
        res.originSend(JSON.stringify(response));
    }
    next();
};
