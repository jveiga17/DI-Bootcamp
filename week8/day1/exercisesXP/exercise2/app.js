import persons from "./data.js";

function calcAverageAge(personsArray) {
    const totalAge = personsArray.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / personsArray.length;
    console.log('Average Age:', averageAge);
}

calcAverageAge(persons);