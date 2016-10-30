var async       = require('async');
var crypto      = require('crypto');
var nodemailer  = require('nodemailer');
var Contact        = require('../models/Contact');
var express     = require('express');
var router      = express.Router();
var fs          = require('fs');

router.post('/send',function (req,res) {
    console.log(req.body);
    var contact = new Contact(req.body);
    contact.save(function (err) {
        if(err){
            return res.status(500).send({
                status:500,
                msg:err
            });
        }else{
            return res.status(200).send({
                status:200,
                msg: 'Thank you! Your feedback has been submitted.'
            });
        }
    });
});
router.get('/get',function (req,res) {
    Contact
        .find()
        .exec(function(err,mails){
            return res.status(200).send({
                status:200,
                message:'Messages fetched',
                mails:mails
            });
        });
});
module.exports = router;