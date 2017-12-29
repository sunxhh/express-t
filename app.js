let express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);


// 处理请求参数
let bodyParser = require('body-parser');
// 请求最大值
let maxRequest = "50mb";
// 请求单个参数的最大值
let maxParam = 1024 * 1024 * 10;
app.use(bodyParser.json({ limit: maxRequest }));
app.use(bodyParser.urlencoded({
    limit: maxRequest,
    extended: false,
    parameterLimit: maxParam
}));

// 进入路由
let routes = require('./routes/index');
routes(app);

// 定制404 页面
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});


app.listen(app.get('port'), function() {
    console.log(`服务启动 http://localhost: ${app.get('port')}`);
});
