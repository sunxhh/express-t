var parsePostBody = function (req, done) {
    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        done(chunks);
    });
};
module.exports = function (req, res, next) {
    parsePostBody(req, (chunks) => {
        var body = chunks.toString();
        console.log(body);
        res.end(`Your nick is ${body}`)
    });
};