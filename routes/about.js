//This is the route for the About template it renders the about ejs
//Authors: Nathan, Christain, Ryan	
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
