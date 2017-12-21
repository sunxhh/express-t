let express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);

// 处理请求参数
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
