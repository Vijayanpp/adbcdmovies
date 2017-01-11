var jsonfile = require('jsonfile');
var file='./server/json/news.json';
var request = require('request');
var shuffles=require('./provider/shuffleprovider.js');
var obj;
 
var newssites=[' https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e','https://newsapi.org/v1/articles?source=die-zeit&sortBy=latest&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=wired-de&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e'


]

var data=[];
var articles=[];

newssites.forEach(function(url)
{
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    data.push(JSON.parse(body));

   for(let i=0;i<data.length;i++)
     {
       data[i].articles.forEach(function(array)
       {
            array.source=data[i].source
       }
       )

     articles=articles.concat(data[0].articles);
     }

     articles=shuffles.doShuffle(articles);

  jsonfile.writeFile(file,articles, function (err) {
  console.error(err)
   })
  }
})
})

