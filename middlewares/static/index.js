let path = require('path');
let readFile = require("./readStatic").readFile;
//添加MIME类型
var MIME_TYPE = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};
exports = module.exports = function(req, res, next) {
  let filePath = '.' + req.path;
  var ext = path.extname(filePath);
  ext = ext ? ext.slice(1) : 'unknown';
  var contentType = MIME_TYPE[ext] || "text/plain";
  readFile(filePath).then((data) => {
    res.type(contentType);
    res.status(200);
    res.send(data.toString());
  }).catch(() => {
    next();
  });

};
