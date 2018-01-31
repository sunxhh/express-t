let parsePostBody = require("../parseBody").parsePostBody;
// 获取boundary的值
let getBoundary = function(req) {
    let contentType = req.headers['content-type'];
    let boundary = contentType.split("boundary=")[1] || "";
    boundary = boundary.replace(/-/g, "");
    return boundary;
};

let getOneParam = function(param) {
    let ContentDisposition = new RegExp("^Content-Disposition:([\s\S]*)\n");
}

let handleParam = function(req, chunks) {
    let param = chunks.toString();
    let boundary = getBoundary(req);
    let _body = {};
    let reg = new RegExp('-*' + boundary + "-*" + "\r\n");
    param = param.split(reg);
    param = param.filter((par) => {
        if (par) {
            return true;
        }
        return false;
    });
    param.forEach((par) => {
        par = getOneParam(par);
        _body[par.name] = par.value;
    });
    return _body;
};



module.exports = function(req, res, next) {
    parsePostBody(req, (chunks) => {
        handleParam(req, chunks);
        res.send({ a: "aaa" });
    });
};
