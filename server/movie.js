var jsonfile = require('jsonfile');
var file='./server/json/movie.json';
var request = require('request');
var shuffles=require('./provider/shuffleprovider.js');
var obj;
 
var newssites=['https://api.themoviedb.org/3/movie/now_playing?api_key=9cdc371119e251328b3113f78936e475']

var data=[];
var articles=[];

newssites.forEach(function(url)
{
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    data.push(JSON.parse(body));

   for(let i=0;i<data.length;i++)
     {       
     articles=articles.concat(data[i].results);
     }

     

  jsonfile.writeFile(file,articles, function (err) {
  console.error(err)
   })
  }
})
})

