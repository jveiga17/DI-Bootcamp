// 2
// retrieving div and consoling it 
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// changing names
document.querySelector(".list li:nth-child(2)").textContent = "Richard";

// deleting 2nd li of 2nd ul
document.querySelector(".list:nth-child(2) li:nth-child(2)").remove();

// changing to my name
const userList = document.querySelectorAll('.list li:first-child'); // node list created
userList.forEach(user => { // arrow function
    user.textContent = 'Joao'; 
});


//3
// adding class to uls
const allLists = document.querySelectorAll(".list");
allLists.forEach(list => {
    list.classList.add("student_list");
})

// adding class to 1st ul
const firstList = document.querySelector(".list:first-child");
firstList.forEach (list => {
    list.classList.add("university", "attendance");
})


// 4
// styling
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// do not display
document.querySelector(".list:first-child li:last-child").style.display = "none";

// adding border
document.querySelector(".list:nth-child(1) li:nth-child(2)").style.border = "1px solid black";

// font size body
document.body.fontSize = '16px';

// bonus
if (containerDiv.style.backgroundColor === "lightblue") {
    // select all list items inside .list
    const users = document.querySelectorAll(".list li");
    // convert list to array
    const userNames = Array.from(users).map(user => user.textContent);
    // alert and join usernames
    alert(`Hello ${userNames.join(" and ")}`)
}