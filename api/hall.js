var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var User = require('../models/User');
var Hall = require('../models/Hall');
var express = require('express');
var router = express.Router();

router.post('/addHall',function (req,res) {
    var hall = new Hall({
        available:req.body.available || true,
        name:req.body.hallName,
        description:req.body.hallDescription,
        capacity:req.body.hallCapacity,
        bookingDate:req.body.bookingDate || undefined,
        country:req.body.hallCountry,
        city:req.body.hallCity,
        area:req.body.hallArea,
        address:req.body.hallArea,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        near:req.body.hallNear,
        owner:req.user._id
    });
    hall.save(function(err){
        if(err){
            return res.status(500).send({
                status:500,
                message:err
            });
        }else{
            return res.status(200).send({
                status:200,
                message:'hall added'
            });
        }
    });
});

router.put('/editHall',function (req,res) {
    Hall
        .findById(req.body.hallId)
        .exec(function(err,hall){
            if(hall){
                hall = req.body.hall;
                hall.save(function (err) {
                    if(err){
                        return res.status(500).send({
                            status:500,
                            message:err
                        });
                    }else{
                        return res.status(200).send({
                            status:200,
                            message:'hall edited'
                        });
                    }
                });
            }
        });
});

module.exports = router;