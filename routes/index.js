let upload = require("./upload/uploadRoute");
module.exports = function(app) {
    app.use("/upload", upload);
};
