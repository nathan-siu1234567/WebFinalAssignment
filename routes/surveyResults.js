//This is the route for the SurveyResults ejs
//Authors: Nathan, Christain, Ryan	
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('surveyResults', { title: 'Express' });
});

module.exports = router;
