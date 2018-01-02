var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('holaMundo', { title: 'Hola Mundo',name: 'Luis Maracara' });
});

module.exports = router;