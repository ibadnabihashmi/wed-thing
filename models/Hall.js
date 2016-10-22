var mongoose = require('mongoose');
var User = require('../models/User');

var hallSchema = mongoose.Schema({
    available:{type:Boolean,default:false},
    name:String,
    description:String,
    capacity:Number,
    price:Number,
    country:String,
    city:String,
    area:String,
    address:String,
    near:String,
    latitude:Number,
    longitude:Number,
    views:{
        type:Number,
        default:0
    },
    imgSrc:[String],
    allowsExternalCatering:{type:Boolean,default:false},
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

var Hall = mongoose.model('Hall', hallSchema);

module.exports = Hall;