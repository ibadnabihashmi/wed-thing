var async       = require('async');
var crypto      = require('crypto');
var nodemailer  = require('nodemailer');
var User        = require('../models/User');
var Hall        = require('../models/Hall');
var express     = require('express');
var router      = express.Router();
var multer      = require('multer');
var upload      = multer({ dest: './public/uploads/' });

router.post('/addHall',upload.single('displayImage'),function (req,res,next) {
    console.log(req.files);
    console.log(req.body);
    res.send(200);
    // var hall = new Hall(req.body);
    // hall.save(function(err){
    //     if(err){
    //         return res.status(500).send({
    //             status:500,
    //             message:err
    //         });
    //     }else{
    //         return res.status(200).send({
    //             status:200,
    //             message:'hall added'
    //         });
    //     }
    // });
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