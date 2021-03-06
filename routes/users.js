var express = require('express');
var router = express.Router();
var User = require('../models/User');


router.route("/")
    .get(function (req, res) {
        res.render('login')
    })
    .post(function (req, res) {
        User.findOne({email: req.body.email, password: req.body.password}, "username email", function (err, docs) {
            if (err) res.send(err)
            // req.session.user_id = res._id;
            res.send('Logged with username ' + docs.username);
        })
    });

router.route("/create").get(function (req, res) {
    res.render('create_user', {title: 'Crear usuario'});
})
    .post(function (req, res) {
        var user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            password_confirmation: req.body.conf_password
        });

        user.save(function (err, data) {
            if (err) {
                return console.error(err);
            }
            res.writeHead(200, {'Content-type': 'application/json'});
            res.write(JSON.stringify(data));
            res.end
        });
    });

module.exports = router;
