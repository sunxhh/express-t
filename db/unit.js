const uuidv1 = require('uuid/v1');

// 获取数据库记录的id
exports.getSQLID = function () {
    return uuidv1();
}