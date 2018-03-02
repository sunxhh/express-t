let upload = require("./upload/uploadRoute");
let test = require("./test/test");
let user = require("./user/user");
let static = require("./static/static");
module.exports = function(app) {
    app.use("/static", static);
    app.use("/upload", upload);
    app.use("/test", test);
    app.use("/user", user);
};
