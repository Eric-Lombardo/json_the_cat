const request = require("request");
 
// creating a function after the fact
const fetchBreedDescription = function(breedName, callback) {

  let fullURL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  return request(fullURL, callback);
};

module.exports = { fetchBreedDescription };