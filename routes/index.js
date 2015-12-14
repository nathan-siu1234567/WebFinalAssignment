var express = require('express');
var passport = require('passport');
var router = express.Router();



var User = require('../models/user');
var Truefalse = require('../models/surveyTrueFalse');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Render home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        displayName: req.user ? req.user.displayName : ''
    });
});

/* Render Login page. */
router.get('/login', function (req, res, next) 
{
    if (!req.user) 
    {
        res.render('login', 
        {
            title: 'Login',
            //messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else 
    {
        return res.redirect('/survey');
    }
});

/* Render Login page. */
router.get('/loginSuccess', function (req, res, next) 
{
        res.render('login', 
        {
            title: 'Login',
            //messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
});

/* Process the Login Request */
router.post('/login', passport.authenticate('local-login', 
{
    successRedirect: '/loginSuccess',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Show Registration Page */
router.get('/register', function (req, res, next) 
{
    if (!req.user) 
    {
        res.render('register', 
        {
            title: 'Register',
            //messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else 
    {
        return res.redirect('/survey');
    }
});

/* POST signup data. */
router.post('/register', passport.authenticate('local-registration', 
{
    //Success go to Profile Page / Fail go to Signup page
    successRedirect : '/survey',
    failureRedirect : '/register',
    //failureFlash : true
}));


/* Process Logout Request */
router.get('/logout', function (req, res)
{
  req.logout();
  res.redirect('/survey');
});


/*get the short answer page*/
router.get('/shortAnswer', function(req, res, next) {
  res.render('shortAnswer', { title: 'Short Answer' });
});

/*get the true false page */
router.get('/trueFalse', function(req, res, next) {
  res.render('trueFalse', { title: 'Short Answer' });
});

/* POST truefalse creation. */
router.post('/trueFalse',function(req,res){
    
    var title = req.body.surveytitle;
    var questionOne = req.body.surveyquestion;
    var questionTwo = req.body.surveyquestion2;
    var questionThree = req.body.surveyquestion3;
    var questionFour = req.body.surveyquestion4;
    var questionFive = req.body.surveyquestion5;

    var survey = new Truefalse({surveyTitle: title, surveyQuestion: questionOne, surveyQuestion2: questionTwo, surveyQuestion3: questionThree,
    surveyQuestion4: questionFour, surveyQuestion5: questionFive
    
    
    });
    survey.save();
   
   
    
});
module.exports = router;
