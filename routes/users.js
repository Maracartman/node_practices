var express = require('express');
var router = express.Router();
var User = require('../models/User');


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('login')
});

router.post('/', function (req, res) {
    /*User.find({email:req.body.email,password:req.body.password},"username email",function (err,docs) {
        if(err) res.write('Error')
        res.send('Logged with username ' + docs.username);
    })*/
    User.findOne({email:req.body.email,password:req.body.password},"username email",function (err,docs) {
        if(err) res.send(err)
        res.send('Logged with username ' + docs.username);
    })
})

router.get('/create',function (req,res) {
   res.render('create_user',{title: 'Crear usuario'});
});

router.post('/create', function (req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        password_confirmation: req.body.conf_password
    });

    user.save(function (err, data) {
        if (err){
            return console.error(err);
        }
        res.writeHead(200, {'Content-type': 'application/json'});
        res.write(JSON.stringify(data));
        res.end
    });
    // Con promise
    /*user.save().then(function (us) {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.write(JSON.stringify(us));
        res.end
    },function (err) {
        return console.error(err);
    });*/
})

module.exports = router;
