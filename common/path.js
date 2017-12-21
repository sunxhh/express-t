let path = require('path');
let rootPath = process.cwd();
let slice = require("../lib/common").slice;

/**
 * 获取文件的绝对路径
 */
exports.getPath = function() {
    return path.join.apply(null, slice(arguments));
}
