var fs = require('fs');
var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
    fs.readFile("./views/index.jade",function (err, html) {
        res.write(html);
        res.end();
    });

});

module.exports = router;