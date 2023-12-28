// Exercise 1
//1 - selecting h1
const h1Element = document.querySelector("h1");
console.log(h1Element.textContent);

//2 - removing p
const healthParagraph = document.getElementById("healthParagraph");
healthParagraph.remove();

//3 - adding event listener
const chocolateTitle = document.getElementById("chocolateTitle");
chocolateTitle.addEventListener("click", function(){
  this.style.backgroundColor = "red";
});

//4 - adding event listener display
const historyTitle = document.getElementById("historyTitle");
historyTitle.addEventListener("click", function() {
                              this.style.display = "none";
                              });

//5 - button bold
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", function() {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach (paragraph => {
    paragraph.style.fontWeight = "bold";
  });
});

//6 - bonus 1 
h1Element.addEventListener('mouseover', function() {
        const randomSize = Math.floor(Math.random() * 101);
        this.style.fontSize = `${randomSize}px`;
    });

//7 - bonus 2 
const secondParagraph = document.querySelector("p:nth-child(2)");
secondParagraph.addEventListener("mouseover", function() {
  this.style.transition = "opacity 0.5s";
  this.style.opacity = 0;
});


//--------------
// Exercise 2

// 1 - retrieving form
userForm = document.getElementById("userForm");
console.log(userForm)

// 2 - retrieving inputs
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput);
console.log(lastNameInput);

// 3 - retrieving names
const firstNameByName = document.getElementsByName('firstname')[0];
const lastNameByName = document.getElementsByName('lastname')[0];
console.log(firstNameByName);
console.log(lastNameByName);

// 4 - submit event listener
userForm.addEventListener('submit', function(event) {
  event.preventDefault(); //prevent default form submission - so i can define my own conditions for the form's behaviour
  
  // getting inputs
  const firstNameValue = firstNameInput.value.trim(); // 'trim()' - trims off empty space from given value
  const lastNamevalue = lastNameInput.value.trim(); 
  
  // checking if not empty 
  if (firstNameValue !== '' && lastNamevalue !== '') {
    // creating element - li
    const firstNameLi = document.createElement('li');
    firstNameLi.textContent = firstNameValue;
    
    const lastNameLi = document.createElement('li');
    lastNameLi.textContent = lastNamevalue;
    
    // appending li elements to the ul
    const usersAnswerList = document.querySelector('.usersAnswer');
    
    
    if (usersAnswerList !== null) {
                usersAnswerList.innerHTML = ''; // Clear previous entries
                usersAnswerList.appendChild(firstNameLi);
                usersAnswerList.appendChild(lastNameLi);
            } else {
                console.error("Error: '.usersAnswer' element not found.");
            }
  }
});

//--------------
// Exercise 3

// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems
function getBoldItems() {
    // Collect all the bold items inside the paragraph
    allBoldItems = document.querySelectorAll('p strong');
}

// function that changes the color of all the bold text to blue
function highlight() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {    // arrow function
            item.style.color = 'blue';
        });
    }
}

// function that changes the color of all the bold text back to black
function returnItemsToDefault() {
    if (allBoldItems) {
        allBoldItems.forEach(item => {    
            item.style.color = 'black';
        });
    }
}

// cta getBoldItems to collect all bold items
getBoldItems();

// cta function mouseover
document.querySelector('p').addEventListener('mouseover', highlight);

// cta function mouseout
document.querySelector('p').addEventListener('mouseout', returnItemsToDefault);

console.log(allBoldItems) // test

//--------------
// Exercise 4

document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // radius input value
  const radius = parseFloat(document.getElementById('radius').value);

  // check if the entered value is a valid number
  if (!isNaN(radius)) {
      // formula V = (4/3) * π * r^3
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

      // display the calculated volume in the volume input field
      document.getElementById('volume').value = volume.toFixed(2);
  } else {
      // if entered value is not a valid number, display an error
      alert('Please enter a valid numeric value for the radius.');
  }
});