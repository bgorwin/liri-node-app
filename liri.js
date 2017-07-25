console.log("liri is connected");
var Twitter = require("twitter");
var keys = require('./keys');
// var input = process.argv[2];
console.log(keys);


var client = new Twitter({
  consumer_key: 'aNVUTIU1EbHJG731tZNzRBlco',
  consumer_secret: 'm1lfAOpvdez2qJMWSLhQOBWvrsqoRIOkBrQJEGpyltLRYSQqaJ',
  access_token_key:'874296524771119104-MTVZMmb8j7mVc73kbsqNX6llEt05be5',
  access_token_secret: 'XcZMQsp8jXH1hrh0szCpfVQaPl50pQTbFidKM2UfUP14B'
});

// var tweet = {
//   status: '#tester from node.js'
// };
var params = {
  q: 'brent_gorwin',
  count: 4
};
// client.post('statuses/update', {status: 'Coffee'},  function(error, tweet, response) {
//   if(error) {
//   console.log(tweet);  // Tweet body.
//   console.log(response);
//   } // Raw response object.
// });
var command = process.argv[2];

switch(command) {
  case 'my-tweets':
  Twitter.gotData;
  break;
}


client.get('search/tweets', params, gotData);
   function gotData(error, data, response) {
     var tweets = data.statuses;
     for (var i = 0; i < tweets.length; i++){
       console.log(tweets[i].text);
     }
   }
