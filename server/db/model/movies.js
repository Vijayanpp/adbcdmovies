var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var movieSchema = new Schema({
  title: { type: String, required: true },
	Director:String,
	Hero:String,
	Heroine:String,
	releaseDate:Date,
	Writer:String,
	state: { type:String, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type:String, ref: 'Y', index: true },
	publishedDate: { type:Date, index: true, dependsOn: { state: 'published' } },
	image: { type:String },
	content: {
		brief: { type:String, wysiwyg: true, height: 150 },
		extended: { type:String, wysiwyg: true, height: 400 },
	},
	categories:String
});

var Movie = mongoose.model('User', movieSchema);

// make this available to our users in our Node applications
module.exports =Movie;