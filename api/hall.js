var async       = require('async');
var crypto      = require('crypto');
var nodemailer  = require('nodemailer');
var User        = require('../models/User');
var Hall        = require('../models/Hall');
var express     = require('express');
var router      = express.Router();
var multer      = require('multer');
var upload      = multer({ dest: './public/uploads/' });
var fs          = require('fs');

router.post('/addHall',upload.array('files'),function (req,res,next) {
    fs.mkdirSync('./public/uploads/'+req.body.data.name);
    var hall = new Hall(req.body.data);
    req.files.forEach(function(file){
        fs.renameSync('./public/uploads/'+file.filename,'./public/uploads/'+req.body.data.name+'/'+file.filename+'_'+file.originalname);
        hall.imgSrc.push('public/uploads/'+req.body.data.name+'/'+file.filename+'_'+file.originalname);
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