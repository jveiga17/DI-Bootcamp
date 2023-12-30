// Exercise 1 
// Part 1 

setTimeout(function() {             // used when you want to delay the execution of a function
    alert("Hello World");
}, 2000);

// Part 2 

setTimeout(function() {
    const container = document.getElementById('container');   // defining the const to be used in the appending
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';                   // providing text through .textContent
    container.appendChild(paragraph);                        // .appendChild == endpoint <-- .appendChild --> smth to be added
}, 2000);

// Part 3 

let intervalId;

function addParagraph() {                                      // function to be added to setInterval
    const container = document.getElementById('container');    // same logic from part 2
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);

    // Clear the interval when there are 5 paragraphs
    if (container.querySelectorAll('p').length === 5) {       // if statement
        clearInterval(intervalId);                            // to stop the interval
    }
}

// interval to call addParagraph every 2s
intervalId = setInterval(addParagraph, 2000);  // s in mls

// clear the interval when the button is clicked
function clearIntervalOnClick() {
    clearInterval(intervalId);
}

// attaching the function to the button click event
document.getElementById('clear').addEventListener('click', clearIntervalOnClick);

// doc . retrieve by ('name') . event listener ( functions )


//------------------------------------
// Exercise 2 

// Exercise 2 

// creating variables
let animationInterval;
let animateDiv = document.getElementById('animate');
let containerDiv = document.getElementById('container'); 

function myMove() {
  clearInterval(animationInterval);    // reset animation if already running
  
  // setting initial position of the animateDiv
  let position = 0;
  
  // setting the 'moving'
  animationInterval = setInterval(function() { // 
    // moving 1px
    position += 1;
    animateDiv.style.left = position + 'px';
    
    // checking the end
    if (position >= containerDiv.clientWidth - animateDiv.clientWidth) {
      clearInterval(animationInterval);
    }
  }, 1); // move 1px every ms // Corrected syntax
}
