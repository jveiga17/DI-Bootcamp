// Exercise 1 

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors in the specified order
for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}.`);  // [i]ndex will place the right colour - +1 will print the right colour to the console
}

// if "Violet" is present in the array
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// --------------------------
// Exercise 2 

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Display colors in the specified order with correct ordinal suffix
for (let i = 0; i < colors.length; i++) {
    const suffix = (i + 1) % 100 > 10 && (i + 1) % 100 < 14 ? ordinal[0] : ordinal[(i + 1) % 10];
    console.log(`${i + 1}${suffix} choice is ${colors[i]}.`);
}

// --------------------------
// Exercise 3 

["bread", "carrot", "potato", "chicken", "apple", "orange"]
//  (...) is used to spread the elements of the vegetables and fruits arrays within the result array, creating a new array with all the elements


["U", "S", "A"]
// spread operator is used to spread the characters of the string country into individual elements of a new array 

[undefined, undefined]
// spread operator is used on an array with two empty slots ([,,]). The resulting array newArray will have two elements, both set to undefined

// --------------------------
// Exercise 4

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// map() method
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// filter()
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// [    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' }]

// filter-map method
const fullStackResidentsLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);

console.log(fullStackResidentsLastNames);
// ["Bouley", "Alnaji", "Hajek"]

// --------------------------
// Exercise 5

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

console.log(combinedString);

// output: "a long time ago in a galaxy far far away"

// --------------------------
// Exercise 6

const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// filter() to get only the students who passed
const passedStudents = students.filter(student => student.isPassed);

// chain filter() with forEach() to congratulate the students
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}.`);
});

// output: Good job Ray, you passed the course in Computer Science.
// Good job Jenner, you passed the course in Information Technology.
// Good job Marco, you passed the course in Robotics.
