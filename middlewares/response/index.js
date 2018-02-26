const jsonp = {
    jsonpKey: "callback",
    isJsonp: function(req) {
        if (req.body[this.jsonpKey]) {
            return true;
        }
        return false;
    },
    handleJSONPsend: function(req, responseString) {
        let callbackName = req.body[this.jsonpKey];
        return `${callbackName}(${responseString})`;
    }
};

exports = module.exports = function(req, res, next) {
    res.sendJSON = function(data) {
        let response = {
            code: 200,
            data: data
        };
        let responseString = JSON.stringify(response);
        if (jsonp.isJsonp(req)) {
            responseString = jsonp.handleJSONPsend(req, responseString);
        }
        res.send(responseString);
    };
    next();
};
