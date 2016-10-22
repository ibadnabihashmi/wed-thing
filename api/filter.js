var async       = require('async');
var crypto      = require('crypto');
var nodemailer  = require('nodemailer');
var Hall        = require('../models/Hall');
var express     = require('express');
var router      = express.Router();
var fs          = require('fs');

router.get('/fetchAllvenues',function (req,res) {
    Hall
        .find()
        .exec(function(err,halls){
            if(err){
                return res.status(404).send({
                    status:5404,
                    message:err
                });
            }
            if(halls.length > 0){
                return res.send({
                    status:200,
                    halls:halls
                });
            }
        });
});

module.exports = router;