var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var suggestionSchema = new Schema({
	author: { type: String, required: true },
	text: { type: String, required: true },
	created_at: { type: Date, required: true }
});

var Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;