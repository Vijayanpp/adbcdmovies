var express = require('express');
var jsonfile = require('jsonfile');
var entertainment=require('./server/ent.js');
// var news=require('./server/news.js');
// var business=require('./server/business.js');
// var fashion=require('./server/fashion.js');
// var hotoffer=require('./server/hotoffer.js');
// var movie= require('./server/movie.js');
// var quotes= require('./server/quotes.js');
// var technology=require('./server/Technology.js');
// -----------------------------------------------------------------
 var entjson='./server/json/entertainment.json';
// var newsjson='./server/json/news.json'
// var businessjson='./server/json/business.json'
// var fashionjson='./server/json/fashion.json'
// var hotofferjson='./server/json/hotoffer.json'
// var moviejson='./server/json/movie.json'
// var quotesjson='./server/json/quotes.json'
// var technologyjson='./server/json/technology.json'
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
  response.render('index.html');
});



app.get('/mlupcoming', function(request, response) {
 jsonfile.readFile(entjson, function(err, obj) {
 response.send(obj)
 })
 })

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  });



