let path = require('path');

let slice = require("../lib/common").slice;

/**
 * 获取文件的绝对路径
 */
exports.getPath = function() {
    return path.join.apply(null, slice(arguments));
};

/**
 * 获取route路径
 */
exports.getRequestSrc = function(req) {
    return req.url;
};
