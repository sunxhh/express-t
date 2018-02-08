let fs = require("fs");
let slice = require("../lib/common").slice;
let pathUnit = require('../path');

/**
 * 判断文件是否存在
 * 参数  路径 ...path,
 * 回调函数 callback
 */
let isExist = function() {
    let arg = slice(arguments);
    let callback = arg.pop();
    fs.exists(pathUnit.getPath.apply(null, arg), function(exist) {
        callback(exist);
    });
};

/**
 * 创建文件夹
 * @param {path}  
 * @param {callback}  
 */
let createFolder = function(path, callback) {
    isExist(path, function(exist) {
        if (exist) {
            callback(null);
        } else {
            fs.mkdir(path, function(err) {
                callback(err);
            });
        }
    });
};

module.exports = {
    isExist,
    createFolder
};
