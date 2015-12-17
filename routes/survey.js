//This is the route for the Survey ejs which gets the surveys from the database and sends it to the ejs
//Authors: Nathan, Christain, Ryan  
//website: finalAssignment.azurewebsite.com
//survey.js
var express = require('express');
var router = express.Router();
var Truefalse = require('../models/surveyTrueFalse');
var Shortanswer = require('../models/surveyShortAnswer');




router.get('/', function(req, res, next) {

    

    Truefalse.find(function(err, survey) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
           
            res.render('survey', {
               
                survey: survey
            });
        }
    });

});

router.get('/', function(req, res, next) {

    

    Shortanswer.find(function(err, survey) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
           
            res.render('survey', {
                test: "OM NOM NOM"
                //surveytf: survey
            });
        }
    });

});



module.exports = router;
