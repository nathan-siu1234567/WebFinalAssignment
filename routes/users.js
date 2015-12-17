
//This is the route for the users ejs
//Authors: Nathan, Christain, Ryan	
//website: finalAssignment.azurewebsite.com
//users.js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
