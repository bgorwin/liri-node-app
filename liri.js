console.log("liri is connected");
var Twitter = require("twitter");
var keys = require('./keys');
var Spotify = require('node-spotify-api');
// var input = process.argv[2];
console.log(keys);


// ===================== Twitter ====================== //
var client = new Twitter ({
  consumer_key: 'aNVUTIU1EbHJG731tZNzRBlco',
  consumer_secret: 'm1lfAOpvdez2qJMWSLhQOBWvrsqoRIOkBrQJEGpyltLRYSQqaJ',
  access_token_key:'874296524771119104-MTVZMmb8j7mVc73kbsqNX6llEt05be5',
  access_token_secret: 'XcZMQsp8jXH1hrh0szCpfVQaPl50pQTbFidKM2UfUP14B'
});



var params = {
  q: 'brent_gorwin',
  count: 4
};

var command = process.argv[2];
var command = process.argv[3];
switch(command) {
  case 'my-tweets':
  Twitter.gotData;
  break;

  case 'spotify-this-song':
  Spotify.getSong;
  break;
}

client.get('search/tweets', params, gotData);
   function gotData(error, data, response) {
     var tweets = data.statuses;
     for (var i = 0; i < tweets.length; i++){
       console.log(tweets[i].text);
     }
   }
//========================= End Twitter =========================//




// ======================== Spotify =============================//

var spotify = new Spotify({
  id: 'cfd17547cae4462dafad6ce502314075',
  secret: '446bf4bcd0f548e69b602d1f273b7425'
});

function getSong() {

     }
     spotify.search({ type: 'track', query: 'song'}, function(err, data) {
           console.log("Artist: " + data.tracks.items[0]);
           console.log("Song Name: " + data.tracks.items[0]);
           console.log("Album: " + data.tracks.items[0]);
     });











//========================= End Spotify =========================//
