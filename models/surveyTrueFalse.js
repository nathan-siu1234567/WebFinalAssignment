var mongoose = require('mongoose'); //import mongoose
var Schema = mongoose.Schema;// alias for mongoose.Schema

var TrueFalseSchema = new Schema({
	surveyQuestion: String,
	surveyAnswer1: String,
	surveyAnswer2: String
	

}, {
	collection: 'trueFalse'
});

module.exports = mongoose.model('surveyTrueFalse', TrueFalseSchema);