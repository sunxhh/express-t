let upload = require("./upload/uploadFile");
module.exports = function (app) {
    app.use("/upload", upload);
}