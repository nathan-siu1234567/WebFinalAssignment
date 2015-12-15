var express = require('express');
var router = express.Router();
var Truefalse = require('../models/surveyTrueFalse');



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

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Truefalse.find(id, function(err, survey){

  })


  res.render('surveyTake', { 
    title: 'Survey Take',
    survey: survey 
  });
});



module.exports = router;
