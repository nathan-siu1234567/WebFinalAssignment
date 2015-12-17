//This is the index route it handles the routing for the login and for the survey creation
//Authors: Nathan, Christain, Ryan  
//website: finalAssignment.azurewebsite.com
//index.js
var express = require('express');
var passport = require('passport');
var router = express.Router();



var User = require('../models/user');
var Truefalse = require('../models/surveyTrueFalse');
var Shortanswer = require('../models/surveyShortAnswer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Render home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        username: req.user ? req.user.username : ''
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
            username: req.user ? req.user.username : ''
        });
    }
    else 
    {
        return res.redirect('/login');
    }
});

/* Render Logout success landing page. */
router.get('/logoutSuccess', function (req, res, next) 
{
        res.render('logoutSuccess', 
        {
            title: 'logoutSuccess',
            //messages: req.flash('loginMessage'),
            username: req.user ? req.user.username : ''
        });
});

/* Render Login success landing page. */
router.get('/loginSuccess', function (req, res, next) 
{
        res.render('loginSuccess', 
        {
            title: 'loginSuccess',
            //messages: req.flash('loginMessage'),
            username: req.user ? req.user.username : ''
        });
});

/* Render Login success landing page. */
router.get('/registerSuccess', function (req, res, next) 
{
        res.render('registerSuccess', 
        {
            title: 'registerSuccess',
            //messages: req.flash('loginMessage'),
            username: req.user ? req.user.username : ''
        });
});

/* Render Login success landing page. */
router.get('/surveyCreateSuccess', function (req, res, next) 
{
        res.render('surveyCreateSuccess', 
        {
            title: 'surveyCreateSuccess',
            //messages: req.flash('loginMessage'),
            username: req.user ? req.user.username : ''
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
            username: req.user ? req.user.username : ''
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
    successRedirect : '/registerSuccess',
    failureRedirect : '/register',
    //failureFlash : true
}));


/* Process Logout Request */
router.get('/logout', function (req, res)
{
  req.logout();
  res.redirect('/logoutSuccess');
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

//post shortanswer creation
router.post('/shortAnswer',function(req,res){
    
    
    var question = req.body.surveyquestion;
   

    var surveytf = new Shortanswer({surveyQuestion: question
    
    
    });
    surveytf.save();
   
   
    
});

//make it all public
module.exports = router;
