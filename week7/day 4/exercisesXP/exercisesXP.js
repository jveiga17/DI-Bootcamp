// Exercise 1 

const gifUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// fetch() method to make a GET request to the giphy API
fetch(gifUrl)
  .then(response => {
    // checking if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch GIFs. Status: ${response.status}`); // if not OK, throw an error with the status information
    }
    return response.json();     // if OK, parse the response body as JSON and return it
  })
  .then(data => {
    console.log(data);          // received js Object to the console
  })
  .catch(error => {             // catch and log any errors that occurred during the fetch operation
    console.error('Error fetching GIFs:', error);
  });

// -----
// Exercise 2

const gifUr2 = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// in the const above:
    // i updated the q parameter in the URL to search for "sun".
    // limit=10 to specify that we want to retrieve 10 GIFs.
    // and offset=2 to set the starting position of the results to 2.

// same code 

// -----
// Exercise 3

// given code
    // fetch("https://www.swapi.tech/api/starships/9/")
    //     .then(response => response.json())
    //     .then(objectStarWars => console.log(objectStarWars.result));


async function fetchData() {         // define an async function 
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");       // pause execution until the fetch operation is complete
  
      if (!response.ok) {
        throw new Error(`Failed to fetch Starship data. Status: ${response.status}`);
      }
  
      const objectStarWars = await response.json();                     // await again to parse the response body as JSON

      console.log(objectStarWars.result);
    } catch (error) {
      console.error('Error fetching Starship data:', error.message);
    }
  }
  
  fetchData();
  