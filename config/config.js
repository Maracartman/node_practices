var enviroment;

var config = {
    development:{
        hosting: {
            host: 'localhost',
            port:3000
        },
        database:{
            databaseType: "mongodb",
            host: "localhost",
            database: "node_practice"
        }
    },
    default:{
        hosting: {
            host: 'localhost',
            port:3000
        },
        database:{
            databaseType: "mongodb",
            host: "localhost",
            database: "node_practice"
        }
    }
}

var dbRouteGetter = function getDbRoute(env) {
        dbconf = config[env?env:'default'].database;
        return dbconf.databaseType+'://'+dbconf.host+'/'+dbconf.database;
}

exports.get = function (env) {
    return config[env] || config.default
    enviroment = env;
}
exports.getDbRoute =  dbRouteGetter;