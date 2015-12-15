var express = require('express');
var router = express.Router();
var Truefalse = require('../models/surveyTrueFalse');



/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Truefalse


  res.render('surveyTake', { 
  	title: 'Survey Take' 
  });
});

module.exports = router;
