const nameElement = document.getElementById("name");
const heightElement = document.getElementById("height");
const genderElement = document.getElementById("gender");
const birthyearElement = document.getElementById("birth-year");
const homeWorldElement = document.getElementById("home-world");

async function retrieveUserData(id) {
  const url = "https://www.swapi.tech/api/people/" + id;
  try { 
    showLoadingSpinner(); // showing spinner before making the API call
    const response = await fetch(url);
    const responseJson = await response.json(); 
    const { name, height, gender, birth_year, homeworld } = responseJson.result.properties;
    const homeworldName = await fetchHomeWorld(homeworld);
    
    // display elements
    [nameElement, heightElement, genderElement, birthyearElement, homeWorldElement].forEach((el) => {
      el.classList.add("show");
      el.classList.remove("hidden");
    });

    displayProperties(name, height, gender, birth_year, homeworldName);
  } catch(error) {
    console.error(error);
    document.getElementById("error").classList.add("show");
    document.getElementById("error").classList.remove("hidden");
  } finally {
    hideLoadingSpinner(); // hiding the spinner regardless of success or failure
  }
}

function displayProperties(name, height, gender, birth_year, homeworld) {
  nameElement.innerText = "Name: " + name;
  heightElement.innerText = "Height: " + height;
  genderElement.innerText = "Gender: " + gender;
  birthyearElement.innerText = "Birth Year: " + birth_year;
  homeWorldElement.innerText = "Home World: " + homeworld;
}

async function fetchHomeWorld(homeworld) {
  try {
    const response = await fetch(homeworld);
    const responseJson = await response.json();
    const homeworldName = responseJson.result.properties.name;
    console.log('homeworld', homeworldName);

    return homeworldName;
  } catch (error) {
    console.error(error);
  }
} 

function handleClick(event) {
  const randomId = getRandomId();
  retrieveUserData(randomId);
}
document.getElementById("button")?.addEventListener("click", handleClick);

// spinner functions
function showLoadingSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  spinner.classList.add("show");
}

function hideLoadingSpinner() {
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("show");
  spinner.classList.add("hidden"); 
}

// generating random id
function getRandomId() {
  const MAX_NUMBER = 83;
  return Math.floor(Math.random() * MAX_NUMBER + 1);
}

