var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	title:String,
	author:String,
	published_data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('book', bookSchema);
