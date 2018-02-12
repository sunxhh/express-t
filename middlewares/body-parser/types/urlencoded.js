let parsePostBody = require("../parseBody").parsePostBody;

let parseUrlencode = function (str) {
    let paramList = str.split("&");
    let param = {};
    paramList.forEach(ele => {
        let e = ele.split("=");
        if (e[0]) {
            param[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
        }
    });
    return param;
};

function urlSearch(req) {
    let json = {};
    let name, value;
    let str = req.url; //取得整个地址栏
    let num = str.indexOf("?");
    str = str.substr(num + 1); //取得所有参数
    let arr = str.split("&"); //各个参数放到数组里
    for (let i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            json[decodeURIComponent(name)] = decodeURIComponent(value);
        }
    }
    return json;
}
let handleParam = function (req, chunks) {
    let urlParam = urlSearch(req);
    let param = chunks.toString();
    let _body = parseUrlencode(param);
    _body = Object.assign(urlParam, _body);
    req.body = _body;
    console.log(_body);
};


module.exports = function (req, res, next) {
    parsePostBody(req, (chunks) => {
        handleParam(req, chunks);
        req.originQuery = chunks;
        next();
    });
};