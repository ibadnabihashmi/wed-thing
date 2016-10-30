var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String,
    status:{
        type:String,
        default:'unread'
    }
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;