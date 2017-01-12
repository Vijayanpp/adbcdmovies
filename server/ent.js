var jsonfile = require('jsonfile');
var file='./server/json/entertainment.json';
var request = require('request');
var shuffles=require('./provider/shuffleprovider.js');
var obj;
 
var newssites=['http://localhost:3000/malayalam','http://localhost:3000/malayalam'];


var data=[];
var articles=[];

newssites.forEach(function(url)
{
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    data.push(JSON.parse(body));

   for(let i=0;i<data.length;i++)
     {       
     articles.push(data[i]);
     }

    // articles=shuffles.doShuffle(articles);

  jsonfile.writeFile(file,articles, function (err) {
  console.error(err)
  console.log('hi')
   })
  }
})
})


