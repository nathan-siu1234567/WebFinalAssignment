var express = require('express');
var router = express.Router();
var Truefalse = require('../models/surveyTrueFalse');



/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Truefalse.findbyid(id, function(err, survey){

  })


  res.render('surveyTake', { 
  	title: 'Survey Take',
  	survey: survey 
  });
});

module.exports = router;
