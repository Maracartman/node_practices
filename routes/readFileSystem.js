var fs = require('fs');
var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
    var view = fs.readFileSync("./views/index.jade");
    res.write(view);
    res.end();
});

module.exports = router;