// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:                
funcOne()                                                                 
// #1.2 What will happen if the variable is declared 
// with const instead of let ?                                             
                                                                           
// Answers: 

// 1.1 --> output: inside the funcOne function 3
// 1.2 --> If the variable is declared with const instead of let, we'll get an error, bc we cannot reassign a value to a CONSTant variable



//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
                                                                           
// Answers: 

// 2.1 --> // output: inside the funcThree function 0, then the output is: inside the funcThree function 5
// 2.2 --> If the variable is declared with const instead of let, we'll get an error, bc we cannot reassign a value to a CONSTant variable



//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
                                                                           
// Answers: 

// 3.1 --> // output: inside the funcFive function hello



//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
                                                                           
// Answers: 

// 4.1 --> output: inside the funcSix function test
// 4.2 --> if the variable is declared with const instead of let, it will not result in an error.



//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?


// 5.1 --> in the if block 5 ---- outside of the block 2
// 5.2 --> if the variable is declared with const instead of let, it will not result in an error.

//-----------------------------------------
// Exercise 2 

const winBattle = () => true;   // making it an arrow function

const experiencePoints = winBattle() ? 10 : 1;    // terniary operator 

console.log(experiencePoints);

//-----------------------------------------
// Exercise 3

const isString = (value) => typeof value === 'string';

// Example usage:
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

//-----------------------------------------
// Exercise 4

const sum = (a, b) => console.log(a + b);

// test
sum(5, 8)

//-----------------------------------------
// Exercise 5

// declaration
function convertToGrams(weightKg) { 
    return weightKg * 1000;
};

console.log(convertToGrams(2)); // output: 2000

// expression
// Function Expression
const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
  };
  

console.log(convertToGramsExpression(2)); // output: 2000
  
// answer
// Function declarations are hoisted, meaning they are available for use
// throughout the entire scope, while function expressions are not.

// arrow 
const convertToGramsArrow = weightKg => weightKg * 1000;

console.log(convertToGramsArrow(4)) // output: 4000

//-----------------------------------------
// Exercise 6

(function output (numChildren, partnerName, location, jobTitle) {
    // DOM element where to display the sentence
    const outputElement = document.body; 
  
    // sentence using template literals
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  
    // displaying
    outputElement.innerHTML = `<p>${sentence}</p>`;
  })(3, 'Alice', 'New York', 'Software Developer');

//-----------------------------------------
// Exercise 7

// Self-invoking function to welcome the user
(function (userName) {
    // Get the navbar container
    const navbar = document.getElementById('navbar');
  
    // Create a div element for user welcome
    const userWelcomeDiv = document.createElement('div');
    userWelcomeDiv.classList.add('user-welcome');
  
    // Create elements for user name and profile picture (you can customize this based on your needs)
    const userNameElement = document.createElement('span');
    userNameElement.textContent = `Welcome, ${userName}!`;
  
    const userProfilePic = document.createElement('img');
    userProfilePic.src = 'path/to/user-profile-pic.jpg'; // Replace with the actual path to the user's profile picture
    userProfilePic.alt = 'User Profile Picture';
  
    // Append elements to the user welcome div
    userWelcomeDiv.appendChild(userNameElement);
    userWelcomeDiv.appendChild(userProfilePic);
  
    // Append the user welcome div to the navbar
    navbar.appendChild(userWelcomeDiv);
  })('John');
  
//-----------------------------------------
// Exercise 8

// Part I
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      // Display sentence on the DOM
      document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.<br>`;
    }
  
    // cta inner function
    addIngredients('apple', 'orange', 'carrot');
  }
  
  // cta outer function
  makeJuice('medium');

// Part 2 

function makeJuice(size) {
    // empty array 
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      // push ingredients into the array
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      // Display sentence on the DOM using the ingredients array
      document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredients.join(', ')}.<br>`;
    }
  
    // cta addIngredients twice
    addIngredients('apple', 'orange', 'carrot');
    addIngredients('spinach', 'banana', 'berry');
  
    // cta displayJuice once
    displayJuice();
  }
  
  // cta makeJuice in the global scope
  makeJuice('large');

// Part 3 

