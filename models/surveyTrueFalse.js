var mongoose = require('mongoose'); //import mongoose
var Schema = mongoose.Schema;// alias for mongoose.Schema

var TrueFalseSchema = new Schema({
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
	
	surveyCount:Number,
	surveyLifetime:Date
	
	
	

}, {
	collection: 'trueFalse'
});

module.exports = mongoose.model('truefalse',  TrueFalseSchema);