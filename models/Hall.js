var mongoose = require('mongoose');
var User = require('../models/User');

var hallSchema = mongoose.Schema({
    available:Boolean,
    name:String,
    description:String,
    capacity:Number,
    catering:Boolean,
    bookingDate:Date,
    country:String,
    city:String,
    area:String,
    address:String,
    near:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

var Hall = mongoose.model('Hall', hallSchema);

module.exports = Hall;