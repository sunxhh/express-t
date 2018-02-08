let mysql = require('mysql');
let dbConfig = require("./sqlConfig").dbConfig;
let pool = mysql.createPool(dbConfig);


exports.query = function (sql) {
    return new Promise(function (resolve, reject) {
        pool.query(sql, function (error, results, fields) {
            if (error) {
                reject(error);
                return;
            };
            resolve(results);
        });
    });
}