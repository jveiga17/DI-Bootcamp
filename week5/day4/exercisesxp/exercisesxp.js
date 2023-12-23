    // Exercise 1 

// Part I - Review About Arrays
const people = ["Greg", "Mary", "Devon", "James"];

// remove "Greg"
people.shift();

// replace "James" with "Jason"
const jamesIndex = people.indexOf("James");
people[jamesIndex] = "Jason";

// my name to the end
people.push("Joao");

// Console.log Mary’s index
console.log(people.indexOf("Mary"));

// copy without "Mary" and your name
const peopleCopy = people.slice(1, 3);

// Index of "Foo" and explanation
console.log(people.indexOf("Foo")); // Returns -1 because "Foo" is not in the array

// Create a variable called last
const last = people[people.length - 1];

// Part II - Loops
// Iterate through the people array and console.log each person
for (const person of people) {
  console.log(person);
}

// Iterate through and exit after "Devon"
for (const person of people) {
  console.log(person);
  if (person === "Devon") break;
}


    // Exercise 2

const colors = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
    
    // Exercise 3 

let number;

do {
    number = prompt("Please enter a number:");
} while (Number(number) < 10);


    // Exercise 4 

const building = {
numberOfFloors: 4,
numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
},
nameOfTenants: ["Sarah", "Dan", "David"],
numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
},
};

// Console.log the number of floors
console.log(building.numberOfFloors);

// Console.log how many apartments on floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// Console.log the second tenant's name and number of rooms
const secondTenant = building.nameOfTenants[1];
const rooms = building.numberOfRoomsAndRent[secondTenant][0];
console.log(`${secondTenant} has ${rooms} rooms.`);

// Check and possibly increase Dan's rent
const sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahAndDavidRent > danRent) {
building.numberOfRoomsAndRent.dan[1] = 1200;
}

    // Exercise 5 

const family = {
    father: "John",
    mother: "Jane",
    son: "Alex",
    daughter: "Emma",
    };
    
    // Using a for in loop, console.log the keys of the object
    for (const key in family) {
    console.log(key);
    }
    
    // Using a for in loop, console.log the values of the object
    for (const key in family) {
    console.log(family[key]);
    }

    
    // Exercise 6 
    
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
    };
    
    // Using a for loop, console.log "my name is Rudolf the raindeer"
    let sentence = "";
    for (const key in details) {
    sentence += details[key] + " ";
    }
    console.log(sentence.trim());

    // Exercise 7
      
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Secret society name
const secretSocietyName = names.map(name => name[0]).sort().join("");
console.log(secretSocietyName);
    