var fs = require('fs');
var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {
    fs.readFile("./views/index.jade",function (err, html) {
        res.writeHead(200,{'Content-type':'application/js'});
        res.write(JSON.stringify({'nombre':'Luis Maracara','Username':'maracartman'}));
        res.end();
    });



});

module.exports = router;