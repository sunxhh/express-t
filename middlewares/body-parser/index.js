var parsePostBody = function (req, done) {
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

var parsers = Object.create(null);

module.exports = function (req, res, next) {
    parsePostBody(req, (chunks) => {
        var body = chunks.toString();
        body = body.split("\r\n");
        req.__body = body;
        next();
    });
};



function createParserGetter(name) {
    return function get() {
        return loadParser(name)
    }
}



function loadParser(parserName) {
    var parser = parsers[parserName]

    if (parser !== undefined) {
        return parser
    }
    switch (parserName) {
        case 'json':
            parser = require('./lib/types/json')
            break
        case 'raw':
            parser = require('./lib/types/raw')
            break
        case 'text':
            parser = require('./lib/types/text')
            break
        case 'urlencoded':
            parser = require('./lib/types/urlencoded')
            break
    }
    return (parsers[parserName] = parser)
}