var jsonfile = require('jsonfile');
var file='./server/json/entertainment.json';
var request = require('request');
var shuffles=require('./provider/shuffleprovider.js');
var obj;
 
var newssites=['https://vijayanpp.github.io/moviedatabase/upcomingmovies.json']


var data=[];
var articles=[];

newssites.forEach(function(url)
{
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
   data=JSON.parse(body);
   articles=data;  
   jsonfile.writeFile(file,articles, function (err) {
   console.error(err)
   })
  }
})
})


