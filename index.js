const { fetchBreedDescription } = require("./breedFetcher");


const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, response, body) => {
  if (error) {
    console.log("unable to reach api\n", "error name: ", error.name, "error mssg: ", error.message);
  } else {
    let apiArray = JSON.parse(body);
    
    if (apiArray[0]) {
      console.log(apiArray[0].description);
    } else {
      console.log("The cat breed you are trying to search is invalid :(");
    }
  }
});