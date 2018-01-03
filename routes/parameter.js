var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('holaMundo', { title: 'Hola Mundo',name: req.query.nombre });
});

router.get('/p/:name', function(req, res, next) {
    res.render('holaMundo', { title: 'Hola Mundo',name: req.params.name });
});

router.post('/post', function (req, res) {
    const body = req.body
    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${body} to Express`)
})


module.exports = router;