var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
    res.render('login')
});

router.post('/',function (req,res) {
  res.send('Logged with email ' + req.body.email)
})

module.exports = router;
