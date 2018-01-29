/**
 * 设置允许跨域
 */
// 允许跨域的跨域验证类型
const methodName = "OPTIONS";

exports.allowAccess = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method.toLocaleUpperCase() === methodName) {
        res.send(200);
        return;
    }
    next();
};
