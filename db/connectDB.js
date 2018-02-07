let mysql = require('mysql');
let dbConfig = require("./sqlConfig").dbConfig;
let pool = mysql.createPool(dbConfig);

module.exports = pool;
pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT something FROM sometable', function (error, results, fields) {
        // And done with the connection.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});
let a = async function () {
    const f1 = await readFile('/etc/fstab');
    const f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
};