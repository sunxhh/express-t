let query = require('../connectDB').query;
let map = require("./user-map");
exports.getUsers = function(params) {
    return query(map.getUsers()).then((result) => {
        return result;
    }).catch((result) => {
        return result;
    });
}
