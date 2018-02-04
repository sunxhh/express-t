let mysql = require('mysql');
let dbConfig = require("./sqlConfig").dbConfig;
var connection = mysql.createConnection(dbConfig);

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });