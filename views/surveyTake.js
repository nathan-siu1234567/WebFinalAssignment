<!--
//This is the template for surveyTake.js
//Authors: Nathan, Christain, Ryan  
//website: finalAssignment.azurewebsite.com
//surveyTake.js
-->
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('surveyTake', { title: 'Express' });
});

module.exports = router;
