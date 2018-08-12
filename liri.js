require("dotenv").config();
var request = require("request");

// Add the code required to import the keys.js file and store it in a variable. ??

/* 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter); 
*/

var command = process.argv[2];
var name = process.argv[3];

// if else statements:

/* Make it so liri.js can take in one of the following commands:
* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says` 
??????
*/

if(command == 'movie-this') {
    console.log(command);
    moviethis(name);
}

/* YOU CAN FORMAT THE ABOVE CODE AS BELOW, IF AND ONLY IF THE FUNCTION ONLY DOES ONE THING:

if(command == 'movie-this') moviethis();

*/


function mytweets() {
  // This will show your last 20 tweets and when they were created at in your terminal/bash window.
}

function spotifythissong(song_name) {
  /* This will show the following information about the song in your terminal/bash window
    Artist(s)
    The song's name
    A preview link of the song from Spotify
    The album that the song is from 
    
    If no song is provided then your program will default to "The Sign" by Ace of Base.
    
    */
}

function moviethis(movie_name) {
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
Feel free to change the text in that document to test out the feature for other commands. */

}