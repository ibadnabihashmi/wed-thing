var mongoose = require('mongoose');
var User = require('../models/User');

var salonSchema = mongoose.Schema({
    
});

var Salon = mongoose.model('Salon', salonSchema);
module.exports = Salon;