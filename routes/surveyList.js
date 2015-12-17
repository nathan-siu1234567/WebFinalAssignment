//This is the route for the SurveyList ejs
//Authors: Nathan, Christain, Ryan
//website: finalAssignment.azurewebsite.com
//surveyList.js	
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('surveyList', { title: 'Express' });
});

module.exports = router;
