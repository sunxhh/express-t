exports.uploadFile = function(req, res, next) {
    let body = req.body;
    for(let key in body){
        console.log(body[key]);
    }
    console.log(req.files);
    res.send("aaa");
};
