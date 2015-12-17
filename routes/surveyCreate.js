//This is the route for the surveyCreate ejs
//Authors: Nathan, Christain, Ryan	
//website: finalAssignment.azurewebsite.com
//surveyCreate.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('surveyCreate', { title: 'Express' });
});

module.exports = router;
