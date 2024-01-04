// Exercise 1 

function compareToTen(number) {
    return new Promise((resolve, reject) => {
        if (number <= 10) {
            resolve(`${number} is less than or equal to 10`);
        }   else {
            reject(`${number} is greater than 10`);
        }
    });
}

// testing
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// -----
// Exercise 2 

function randomFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success!');
        }, 4000); // 4s delay 
    });
}

// testing
delayedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

// -----
// Exercise 3

const resolvedPromise = Promise.resolve(3);

resolvedPromise
  .then(result => console.log('Resolved:', result))
  .catch(error => console.log('Error:', error));


const rejectedPromise = Promise.reject("Boo!");

rejectedPromise
  .then(result => console.log('Resolved:', result))
  .catch(error => console.log('Error:', error));

