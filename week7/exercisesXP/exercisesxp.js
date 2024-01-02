// Exercise 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// output: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"

// -----
// Exercise 2

function displayStudentInfo(objUser){
    // destructuring the objUser paramater
    const {first, last} = objUser

    // constructing the output string
    const output = `Your full name is ${first} ${last}`;

    return output;
}

const result = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(result)

// -----
// Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 }

// turning it into array
const usersArray = Object.entries(users);

// multiplying users' ids
const newUsersArray = usersArray.map(([user, id]) => [user, id * 2]);

console.log(newUsersArray)

// -----
// Exercise 4 

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// output: object

// ----- 
// Exercise 5 

// original class
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  
    // 2 would be the correct option
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);        // correctly calling the constructor() from Dogs
      this.size = size;  // properly introduced new property
    }
  };  


// ----- 
// Exercise 6 

// [2] === [2] - false 
// {} === {} - false 

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // output: 4
console.log(object3.number); // output: 4
console.log(object4.number); // output: 5

// classes

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

class Mammal extends Animal {
    sound(noise) {
        return `{noise}! I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`
    }
};

const farmerCow = new Mammal("Lily", "cow", "White");
console.log(farmerCow.sound('Mooo'));