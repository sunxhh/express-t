var parsePostBody = exports.parsePostBody = function(req, done) {
    var arr = [];
    var chunks;

    req.on('data', (buff) => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        done(chunks);
    });
};
