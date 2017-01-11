var jsonfile = require('jsonfile');
var file='./server/json/technology.json';
var request = require('request');
var shuffles=require('./provider/shuffleprovider.js');
var obj;
 
var newssites=[' https://newsapi.org/v1/articles?source=wired-de&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=t3n&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
' https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e'
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

     articles=articles.concat(data[i].articles);
     }

  articles=shuffles.doShuffle(articles);
  jsonfile.writeFile(file,articles, function (err) {
  console.error(err)
   })
  }
})
})

/*To Shuffle an Array*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
