let url = require('url');
let fs = require('fs');
let path = require('path');

//mime类型
let mime = {
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
    "xml": "text/xml",
    "unknown": "text/plain"
};

// 文件夹
let folderName = "public/";

//响应请求的函数
module.exports = function(request, response, next) {
    let filePath = getFilePath(request);
    let contentType = getContentType(request);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            next();
        }
        //没出错 并且文件存在
        if (!err && stats.isFile()) {
            readFileResponse(filePath, contentType, response);
        }
        //如果路径是目录
        if (!err && stats.isDirectory()) {
            next();
        }
    });
};



//读取文件并返回
function readFileResponse(filePath, contentType, response) {
    response.writeHead(200, { "content-type": contentType });
    //建立流对象，读文件
    let stream = fs.createReadStream(filePath);
    //错误处理
    stream.on('error', function() {
        response.writeHead(500, { "content-type": contentType });
        response.end("<h1>500 Server Error</h1>");
    });
    //读取文件
    stream.pipe(response);
}

// 获取url路径
function getPathName(request) {
    //request里面切出标识符字符串
    let requestUrl = request.url;

    //url模块的parse方法 接受一个字符串，返回一个url对象,切出来路径
    let pathName = url.parse(requestUrl).pathname;

    //对路径解码，防止中文乱码
    pathName = decodeURI(pathName);

    return pathName;
}

// 获取文件绝对路径
function getFilePath(request) {
    let pathName = getPathName(request);

    pathName = pathName.replace(/^(\/)/, "");
    //获取资源文件的绝对路径
    let filePath = path.resolve(__dirname, "../../", folderName, pathName);

    return filePath;
}

// 获取文件的contentType
function getContentType(request) {
    let pathName = getPathName(request);
    //获取对应文件的文档类型
    //我们通过path.extname来获取文件的后缀名。由于extname返回值包含”.”，所以通过slice方法来剔除掉”.”，
    //对于没有后缀名的文件，我们一律认为是unknown。
    let ext = path.extname(pathName);
    ext = ext ? ext.slice(1) : 'unknown';

    //未知的类型一律用"text/plain"类型
    let contentType = mime[ext];
    return contentType;
}
