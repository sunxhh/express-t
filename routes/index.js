let upload = require("./upload/uploadRoute");
module.exports = function(app) {
    app.use("/upload", upload);
    addMiddleWares(app);
};

// 添加中间件
function addMiddleWares(app) {
    // 处理请求参数
    let bodyParser = require('body-parser');
    // 请求最大值
    let maxRequest = "50mb";
    // 请求单个参数的最大值
    let maxParam = 1024 * 1024 * 10;
    app.use(bodyParser.json({ limit: maxRequest }));
    app.use(bodyParser.urlencoded({
        limit: maxRequest,
        extended: false,
        parameterLimit: maxParam
    }));
}
