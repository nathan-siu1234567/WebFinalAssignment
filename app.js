var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




var TrueFalseSchema = new mongoose.Schema({
  surveyTitle: String,
	surveyQuestion: String,
	surveyAnswer1: Number,
	surveyQuestion2: String,
	surveyAnswer2: Number,
	surveyQuestion3: String,
	surveyAnswer3: Number,
	surveyQuestion4: String,
	surveyAnswer4: Number,
	surveyQuestion5: String,
	surveyAnswer5: Number,

}, {
	collection: 'trueFalse'
});
var survey = mongoose.model('TrueFalse',TrueFalseSchema);
mongoose.createConnection("mongodb://nathan:ns6098009@ds027155.mongolab.com:27155/truefalse");
var trueFalseDB = mongoose.connection;
trueFalseDB.on('error',console.error.bind(console,'Mongo connection error: '));


//DB Setup 
var DB = require('./config/loginDB.js');
mongoose.connect(DB.url);
mongoose.connection.on('error', function(){
  console.error('MongoDB Connection Error');
});


var routes = require('./routes/index');
var users = require('./routes/users');
var survey = require('./routes/survey');
var about = require('./routes/about');
var surveyCreate = require('./routes/surveyCreate');
var surveyList = require('./routes/surveyList');
var surveyTake = require('./routes/surveyTake');
var surveyResults = require('./routes/surveyResults');




var app = express();

require('./config/passport')(passport);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());




app.use('/', routes);
app.use('/users', users);
app.use('/survey', survey);
app.use('/about', about);
app.use('/surveyCreate', surveyCreate);
app.use('/surveyList', surveyList);
app.use('/surveyTake', surveyTake);
app.use('/surveyResults', surveyResults);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
