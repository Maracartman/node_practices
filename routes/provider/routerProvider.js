var users = require('../users')

const routes = {
    public:{
        'users' : users
    },
    private:{
        'users' : users
    }
}

module.exports.routes = routes;