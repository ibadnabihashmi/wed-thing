var mongoose = require('mongoose');
var User = require('../models/User');

var transportSchema = mongoose.Schema({

});

var Transport = mongoose.model('Transport', transportSchema);
module.exports = Transport;