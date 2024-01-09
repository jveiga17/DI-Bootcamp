// require the lodash package and the math module
const _ = require('lodash');
const math = require('./math');

// exported functions from math module
const resultAddition = math.add(5, 3);
const resultMultiplication = math.multiply(4, 6);

// utility functions from lodash 
const array = [1, 2, 3, 4, 5];
const sumArray = _.sum(array);

// results
console.log('Result of addition:', resultAddition);
console.log('Result of multiplication:', resultMultiplication);
console.log('Sum of array elements:', sumArray);
