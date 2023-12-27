//2
// setAtt
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// create li 
const newListItem = document.createElement("li");

// create text node
const textNode = document.createTextNode("Logout");

// joining them both
newListItem.appendChild(textNode);

// appending new li to ul
const ulElement = navBar.firstElementChild;
ulElement.appendChild(newListItem);

// retrieving elements
const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

// display text
console.log('Text of the first link:', firstLi.textContent);
console.log('Text of the last link:', lastLi.textContent);