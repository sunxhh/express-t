let express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);

let bodyParser = require('./middlewares/body-parser/index');
// 处理请求
app.use(bodyParser);

// 进入路由
let routes = require('./routes/index');
routes(app);

// 定制404 页面
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});


app.listen(app.get('port'), function () {
    console.log(`服务启动 http://localhost: ${app.get('port')}`);
});