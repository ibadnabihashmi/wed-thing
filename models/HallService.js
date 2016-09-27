var mongoose = require('mongoose');
var Hall = require('../models/Hall');

var hallServiceSchema = mongoose.Schema({
    serviceName:String,
    description:String,
    price:Number,
    hall:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hall'
    }
});

var HallService = mongoose.model('HallService', hallServiceSchema);
module.exports = HallService;