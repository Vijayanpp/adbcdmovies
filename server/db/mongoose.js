var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Movie=require("./model/movies");

// var newMovie = Movie({
//    title: "chirutha",
//   Creators: { Director:"vijayan", Author:"pp",Music:"pp"},
//   Cast: { Hero: "vikram", Heroine:"trisha",Villain:"vijayanpp"},
//   overview:"djfkdjfkdjfkjd dkfjdfjd kdjf dkjfkdjf kdfdkj k",
//   review:Array,
//   imageUrl: "jdkfjdkj",
//   meta: {
//     age: 20,
//     website:"www.adbcd.com"
//   },
//   release_at:"12/05/2016",
//   category: "Action"
// });


// newMovie.save(function(err) {
//   if (err) throw err;
//   console.log('User created!');
// });

Movie.find({}, function(err, movies) {
  if (err) throw err;

  // object of all the users
  console.log(movies);
});

// Movie.find({ title: 'chirutha' }, function(err, movie) {
//   if (err) throw err;

//   // object of the user
//   console.log(movie);
// });

// Movie.findOne({ title: 'chirutha' }, function(err, movie) {
//   if (err) throw err;

//   // object of the user
//   console.log(movie);
// });

// Movie.findById("585932eec84f5e0a40dc6b88", function(err, movie) {
//   if (err) throw err;

//   // change the users location
//   movie.title = 'uk';

//   // save the user
//   movie.save(function(err) {
//     if (err) throw err;
//     console.log('movie successfully updated!');
//   });

// });

// 


// Movie.find({ username: 'starlord55' }, function(err, movie) {
//   if (err) throw err;

//   // delete him
//   movie.remove(function(err) {
//     if (err) throw err;

//     console.log('User successfully deleted!');
//   });
// });

// Movie.findByIdAndUpdate('585932eec84f5e0a40dc6b88', { title: 'vijayanparemeswaran' }, function(err, movie) {
//   if (err) throw err;

//   // we have the updated user returned to us
//   console.log(movie);
// });

// Movie.findById('585932eec84f5e0a40dc6b88', function(err, movie) {
//   if (err) throw err;

//   // show the one user
//   console.log(movie);
// });


