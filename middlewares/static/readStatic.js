let path = require("path");
let fs = require("fs");
let resolve = function(src) {
    return path.resolve(__dirname, "../../", src);
};

exports.readFile = function(src) {
    let fullSrc = resolve(src);
    return new Promise(function(resolve, reject) {
        fs.readFile(fullSrc, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
