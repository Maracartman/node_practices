var fs = require('fs');
var express = require('express');
var app = express();
var routerProvider = require('../routes/provider/routerProvider')


app.use('/:type/:function', function (req, res) {
    if (req.params.type === 'private') {
        if (true) {
            routerProvider.routes.private[req.params.function](req, res);
        } else {
            res.writeHead(200, {'Content-type': 'application/json'});
            res.write(JSON.stringify({
                message: 'Debe contar con un token para acceder' +
                ' a estas funcionalidades'
            }));
            res.end();
        }
    } else if (req.params.type === 'public') {
        routerProvider.routes.public[req.params.function](req, res);
    } else {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.write(JSON.stringify({message: 'Ruta de api no registrada'}));
        res.end();
    }

});

/*app.use('/public/:function',function (req,res) {
    routerProvider.routes[req.params.function](req,res);
});*/

module.exports = app;
