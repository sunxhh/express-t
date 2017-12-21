var express = require('express');
var app = express();
var routes = require('./routes/index');

app.set('port', process.env.PORT || 3000);


// 进入路由
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
