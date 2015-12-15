var express = require('express');
var router = express.Router();
var Truefalse = require('../models/surveyTrueFalse');



/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  Truefalse.findById(id, function(err, survey){
  	 // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
        	res.render('surveyTake', { 
  			title: 'Survey Take',
  			survey: survey 
  			});
  		}
  });
});

module.exports = router;
