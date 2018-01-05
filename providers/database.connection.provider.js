var databaseConfig = require('../config/config').getDbRoute(process.env.NODE_ENV);


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(databaseConfig);

module.exports.scheme = Schema;
module.exports.mongoose = mongoose;