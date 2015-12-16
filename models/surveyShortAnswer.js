var mongoose = require('mongoose'); //import mongoose
var Schema = mongoose.Schema;// alias for mongoose.Schema

var ShortAnswerSchema = new Schema({
	surveyQuestion: String
	

}, {
	collection: 'shortAnswer'
});

module.exports = mongoose.model('shortanswer', ShortAnswerSchema);