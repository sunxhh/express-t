let upload = require("./upload/uploadRoute");
let test = require("./test/test");
let user = require("./user/user");
module.exports = function(app) {
    app.use("/upload", upload);
    app.use("/test", test);
    app.use("/user", user);
};
