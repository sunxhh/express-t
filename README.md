# express
expresd搭建后台










数据库 mysql
记录日志 morgan
npm i --save body-parser json compress cookie-parser express-session errorhandler morgan query static
basicAuth 
（app.use(connect.basicAuth)();）
提供基本的访问授权。记住，basic-auth 只提供最基本的安全，并且你只能通过HTTPS
使用basic-auth（否则用户名和密码是通过明文传输的）。只有在需要又快又容易的东
西，并且在使用HTTPS 时，才应该用basic-auth。

• body-parser
（npm install --save body-parser, app.use(require(body- parser)());）
只连入json 和urlencoded 的便利中间件。这个中间件还在Connect 里，但到3.0 时会
移除出去，所以建议你现在开始用这个包。除非你有特别的理由要分别单独使用json
或urlencoded，否则最好用这个包。
中间件 ｜ 101

• json
（参见body-parser）
解析JSON 编码的请求体。如果你在编写一个期望收到JSON 编码请求体的API，就会
需要这个中间件。目前它的使用还不是十分普遍（大多数API 仍然使用application/
x-www-form-urlencoded，这种编码可以被urlencoded 中间件解析），但它确实能让你的
程序更健壮，并不会过时。

• urlencoded
（参见body-parser）
解析互联网媒体类型为application/x-www-form-urlencoded 的请求体。这是处理表单
和AJAX 请求最常用的方式。

• multipart
解析互联网媒体类型为multipart/form-data 的请求体。这个中间件已被废弃了，并在
Connect 3.0 中会被移除。你应该用Busboy 或Formidable 代替它（见第8 章）。


• compress
（app.use(connect.compress);）
用gzip 压缩响应数据。这是好事，用户会因此感激你的，特别是那些网络比较慢或者
用手机上网的用户。它应该在任何可能会发送响应的中间件之前被尽早连入。唯一应该
出现在compress 之前的中间件只有debugging 或logging（它们不发送响应）。

• cookie-parser
（npm install --save cookie-parser, app.use(require(cookie-parser)
（秘钥放在这里）;）
提供对cookie 的支持。参见第9 章。

• cookie-session
（npm install --save cookie-session, app.use(require(cookiesession)());
）
提供cookie 存储的会话支持。我一般不推荐使用这种存储方式的会话。你一定要把它
放在cookie-parser 后面连入。参见第9 章。

• express-session
（npm install --save express-session, app.use(require(expresssession)());）
提供会话ID （存在cookie 里）的会话支持。默认存在内存里，不适用于生产环境，并
且可以配置为使用数据库存储。参见第9 章和第13 章。

• csurf
（npm install --save csurf, app.use(require(csurf)());）
防范跨域请求伪造（CSRF）攻击。因为它要使用会话，所以必须放在express-session
中间件后面。它目前等同于connect.csrf 中间件。可惜简单连入这个中间件并不能神
奇地防范CSRF 攻击，详情请参见第18 章。

• directory
（app.use(connect.directory());）
提供静态文件的目录清单支持。如果不需要目录清单，则无需引入这个中间件。
102 ｜ 第10 章

• errorhandler
（npm install --save errorhandler, app.use(require(errorhandler)());）
为客户端提供栈追踪和错误消息。我建议不要在生产环境中连入它，因为它会暴露实现
细节，可能引发安全或隐私问题。详情请参见第20 章。

• static-favicon
（npm install --save static-favicon, app.use(require(staticfavicon)(path_to_favicon));）
提供favicon（出现在浏览器标题栏上的图标）。这个中间件不是必需的，你可以简单地
在static 目录下放一个favicon.ico，但这个中间件能提升性能。如果你要使用它，应该
尽可能地往中间件栈的上面放。你也可以使用除favicon.ico 之外的其他文件名。

• morgan
（之前的logger, npm install --save morgan, app.use(require(morgan)());）
提供自动日志记录支持：所有请求都会被记录。详情请参见第20 章。

• method-override
（npm install --save method-override, app.use(require(methodoverride)());）
提供对x-http-method-override 请求头的支持，允许浏览器“假装”使用除GET 和POST
之外的HTTP 方法。这对调试有帮助。只在编写API 时才需要。

• query
解析查询字符串，并将其变成请求对象上的query 属性。这个中间件是由Express 隐含
连入的，所以不要自己连入它。

• response-time
（npm install --save response-time, app.use(require(response-time)());）
向响应中添加X-Response-Time 头，提供以毫秒为单位的响应时间。一般在做性能调优
时才需要这个中间件。

• static
（app.use(express.static(path_to_static_files)());）
提供对静态（public）文件的支持。这个中间件可以连入多次，并可指定不同的目录。
详情请参见第16 章。

• vhost
（npm install --save vhost, let vhost = require(vhost);）
虚拟主机（vhost），这个术语是从Apache 借来的，它可使子域名在Express 中更容易管
理。详情请参见第14 章。