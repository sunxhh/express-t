let parsePostBody = require("../parseBody").parsePostBody;
let strUnit = require("../../../lib/string");
// 获取boundary的值
let getBoundary = function(req) {
    let contentType = req.headers['content-type'];
    let boundary = contentType.split("boundary=")[1] || "";
    if (boundary) {
        boundary = boundary.replace(/-/g, "");
    }
    return boundary;
};
// 获取name 以及 文件名
let getContentDisposition = function(param, data) {
    let reg = new RegExp("(Content-Disposition(.*?))(\r\n|\n)");
    let valReg = new RegExp("(;[\\s*](\\S+)=\"(\\S+)\")+?", 'g');
    return param.replace(reg, function(o, n) {
        n.replace(valReg, function() {
            let arg = arguments;
            data[arg[2]] = arg[3];
        });
        return "";
    });
};
// 获取content-type
let getContentType = function(param, data) {
    param.replace(/^\s/g, "");
    let reg = new RegExp("(Content-Type(.*?))(\r\n|\n)");
    return param.replace(reg, function(o, n) {
        let list = n.split(":");
        data[strUnit.trim(list[0])] = strUnit.trim(list[1]);
        return "";
    });
};
// 获取值
let getContentValue = function(param, data) {
    let reg = new RegExp("(^((\\r\\n)|(\\n)))|(((\\r\\n)|(\\n))$)", "g");
    param = param.replace(reg, "");
    return (data.value = param);
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
        let cBody = {};
        par = getContentDisposition(par, cBody);
        par = getContentType(par, cBody);
        par = getContentValue(par, cBody);
        if (cBody.name) {
            _body[cBody.name] = cBody;
        }
    });
    req.body = _body;
};



module.exports = function(req, res, next) {
    parsePostBody(req, (chunks) => {
        handleParam(req, chunks);
        req.originQuery = chunks;
        next();
    });
};
