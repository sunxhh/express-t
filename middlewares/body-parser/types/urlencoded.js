let parsePostBody = require("../parseBody").parsePostBody;

let parseUrlencode = function (str) {
    let paramList = str.split("&");
    let param = {};
    paramList.forEach(ele => {
        let e = ele.split("=");
        param[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
    });
    return param;
}

let handleParam = function (req, chunks) {
    let param = chunks.toString();
    _body = parseUrlencode(param);
    console.log(_body);
    req.body = _body;
};



module.exports = function (req, res, next) {
    parsePostBody(req, (chunks) => {
        handleParam(req, chunks);
        req.originQuery = chunks;
        next();
    });
};