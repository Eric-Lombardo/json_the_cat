const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, response, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      let apiArray = JSON.parse(desc);

      // compare returned description
      assert.equal(expectedDesc, apiArray[0].description);

      done();
    });
  });
  it('returns a error mssg for a invalid breed, via callback', (done) => {
    fetchBreedDescription("horse", (error, response, body) => {
      let output;

      let apiArray = JSON.parse(body);
      
      if (!apiArray[0]) {
        output = "The cat breed you are trying to search is invalid :(";
      }

      assert.equal(output, "The cat breed you are trying to search is invalid :(");

      done();
    });
  });
});