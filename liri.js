require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable. ??

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var keys = require("./keys.js");

var command = process.argv[2];
var song_name = process.argv[3];
var movie_name = process.argv[3];


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter); 

// if else statements:

/* Make it so liri.js can take in one of the following commands:
* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says` 
??????
*/

// if(command == 'movie-this') {
//     console.log(command);
//     moviethis(name);
// }

/* YOU CAN FORMAT THE ABOVE CODE AS BELOW, IF AND ONLY IF THE FUNCTION ONLY DOES ONE THING:

if(command == 'movie-this') moviethis();

*/

function readCommand() {
  if(command === "my-tweets") {
      myTweets();
  } else if(command === "spotify-this-song") {
      spotifyThisSong();
  } else if(command === "movie-this") {
      movieThis();
  } else if(command === "do-what-it-says") {
      doWhatItSays();
  }
}

readCommand();

function myTweets() {
    
  var client = new Twitter(keys.twitter);
  var params = {screen_name: "ProblyBrilliant"};
  client.get('statuses/user_timeline', params, function(error, tweets) {
    if (!error) {
        for(var i = 0; i< 20; i++){
        console.log("@iluvaripants: " + tweets[i].text);
        }
    }
});
}

function spotifyThisSong() {

  var spotify = new Spotify(keys.spotify);

  if (!song_name) {
      song_name = "Dark Side of the Moon";
  }
  
  spotify.search({ type: 'track', query: song_name}, function(err, data) {
      if (err) {
          return console.log('Error occurred: ' + err);
      } 
      console.log(
      "Artist: " + data.tracks.items[0].album.artists[0].name, "\n" +
      "Track: " + data.tracks.items[0].name, "\n" +
      "Album: " + data.tracks.items[0].album.name, "\n" +
      "Spotify link: " + data.tracks.items[0].external_urls.spotify
      ); 

  }); 
}

function movieThis () {

  if (!movie_name) {
      movie_name = "Mr. Nobody";
  }

  request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

      if (!error && response.statusCode === 200) {
  
      console.log(
          "Name: " + JSON.parse(body).Title, "\n" +
          "Released: " + JSON.parse(body).Released, "\n" +
          "IMDB Rating: " + JSON.parse(body).imdbRating, "\n" +
          "Country: " + JSON.parse(body).Country, "\n" +
          "Language: " + JSON.parse(body).Language, "\n" +
          "Plot: " + JSON.parse(body).Plot, "\n" +
          "Actors: " + JSON.parse(body).Actors
      );
      }
  }); 
} 

function doWhatItSays () {
  fs.readFile("random.txt", "utf8", function(error, data) {

      if (error) {
        return console.log(error);
      } else {
          var randomArray = data.split(",");
          command = randomArray[0];
          song_name = randomArray[1];
          readCommand();

      } 
  });
}

// function mytweets() {
//   // This will show your last 20 tweets and when they were created at in your terminal/bash window.
// }

// function spotifythissong(song_name) {
//   /* This will show the following information about the song in your terminal/bash window
//     Artist(s)
//     The song's name
//     A preview link of the song from Spotify
//     The album that the song is from 
    
//     If no song is provided then your program will default to "The Sign" by Ace of Base.
    
//     */
// }

// function moviethis(movie_name) {
    /*
    This will output the following information to your terminal/bash window:

    IF ELSE STATEMENTS

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!
*/

// the OMDB API requires an API key. You may use trilogy

/*

request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});
} // this is the end of the movie function

function dowhatitsays() {
    /* Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.

}

*/