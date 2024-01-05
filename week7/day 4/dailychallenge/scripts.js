// giphy API key and URL
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const apiUrl = 'https://api.giphy.com/v1/gifs/random';

// used to reference the HTML elements in the js
const gifForm = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

// event listener to the form for submitting the category
gifForm.addEventListener('submit', function (event) {

    event.preventDefault();      // prevent the default form submission behaviour
    const category = categoryInput.value.trim();   // get the trimmed value of the category input

    // check if the category is not empty
    if (category !== '') {
        fetchRandomGif(category);        // call the fetchRandomGif function with the provided category
    }
});

// event listener to the "Delete All" button
deleteAllBtn.addEventListener('click', function () {
    gifContainer.innerHTML = '';            // clearing the inner HTML of the gifContainer = removing all gif
});

function fetchRandomGif(category) {
    const fullUrl = `${apiUrl}?tag=${category}&api_key=${apiKey}`;   // full URL for fetching a random gif

    // fetch API to make a request to the giphy API
    fetch(fullUrl)
        .then(response => response.json())            // parse the response as JSON
        // process the data received from the API
        .then(data => {
            // URL of the original GIF from the API response
            const gifUrl = data.data.images.original.url;

            const gifElement = document.createElement('img');  // create a new image element
            gifElement.src = gifUrl;                           // set the source of the image element to the fetched gif URL

            const deleteButton = document.createElement('button');       // create a new button element for deleting gifs
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', function () {         // event listener to the delete button
                gifContainer.removeChild(gifElement);                    // remove the gif element and the delete button from the container
                gifContainer.removeChild(deleteButton);
            });

            // append the gif element and the delete button to the container
            gifContainer.appendChild(gifElement);
            gifContainer.appendChild(deleteButton);
        })
        .catch(error => console.error('Error fetching gif:', error));
}
