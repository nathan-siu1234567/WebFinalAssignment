//This is the route for the SurveyTake ejs 
//Authors: Nathan, Christain, Ryan 
//website: finalAssignment.azurewebsite.com
//surevyTake.js 
var express = require('express');
var router = express.Router();
var Truefalse = require('../models/surveyTrueFalse');



/* GET home page. */
router.get('/:id', function(req, res, next) {

  var id = req.params.id;

  Truefalse.find(id, function(err, survey){
  	 // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
        	res.render('surveyTake', { 
        	id: id,	
  			survey: survey 
  			});
  		}
  });
});



module.exports = router;
