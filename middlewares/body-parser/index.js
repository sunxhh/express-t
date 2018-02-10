var parsers = Object.create(null);
var contentTypeList = ["multipart", "urlencoded"];
exports = module.exports = function (req, res, next) {
    let contentType = req.headers['content-type'];
    contentType = getContenType(contentType);
    if (!contentType) {
        next();
        return;
    }
    exports[contentType](req, res, next);
};

function getContenType(contentType) {
    for (var type of contentTypeList) {
        if (contentType && ~contentType.indexOf(type)) {
            return type;
        }
    }
    return "";
}

Object.defineProperty(exports, 'json', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('json')
});

Object.defineProperty(exports, 'multipart', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('multipart')
});

Object.defineProperty(exports, 'urlencoded', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('urlencoded')
});



function createParserGetter(name) {
    return function get() {
        return loadParser(name);
    };
}



function loadParser(parserName) {
    var parser = parsers[parserName];

    if (parser !== undefined) {
        return parser;
    }
    switch (parserName) {
        case 'json':
            parser = require('./types/json');
            break;
        case 'multipart':
            parser = require('./types/multipart');
            break;
        case 'urlencoded':
            parser = require('./types/urlencoded');
            break;
    }
    return (parsers[parserName] = parser);
}