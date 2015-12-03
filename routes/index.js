var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*get the short answer page*/
router.get('/shortAnswer', function(req, res, next) {
  res.render('shortAnswer', { title: 'Short Answer' });
});

module.exports = router;
