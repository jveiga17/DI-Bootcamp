// 1

    function displayNumbersDivisible(divisor = 23) {      // setting the default, for the basic exercise
        let sum = 0;
    
        console.log(`Numbers divisible by ${divisor}:`);
    
        for (let i = 0; i <= 500; i++) {   // setting conditions
            if (i % divisor === 0) {     // changed 23 to 'divisor' to fit different entries
                console.log(i);          // shows me the numbers
                sum += i;                // adds it to the sum (objective of the exercise)
            }
        }
    
        console.log(`Sum: ${sum}`);      // shows me the sum
    }
    
    // ctas - function with the default
    displayNumbersDivisible();
    
    // function with a custom divisor (e.g., 3)
    displayNumbersDivisible(3);
    
// ---------------------------------
// 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"]; // array

function myBill() {
    let total = 0;

    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            // Bonus: Decrease the item's stock by 1
            stock[item] -= 1;
        }
    }

    return total;
}

// cta  myBill() function and log the result
const totalPrice = myBill();
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
console.log("Updated Stock:", stock);


// -------------------
// 3 

function changeEnough(itemPrice, amountOfChange) {
    // defining values
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    if (amountOfChange.some(isNaN)) {
        console.log("Invalid input. Please provide valid numbers for each coin.");
        return false;
    }

    // calculating total change
    const totalChange = (
        amountOfChange[0] * quarterValue +
        amountOfChange[1] * dimeValue +
        amountOfChange[2] * nickelValue +
        amountOfChange[3] * pennyValue
    );

    if (totalChange >= itemPrice) {
        console.log(`You can afford the item!`);
        return true;
    } else {
        console.log(`You cannot afford the item.`);
        return false;
    }
}

console.log(changeEnough(4.25, [30, 5, 1]));

// ----------------------------------
// 4 

function hotelCost() {
    let nights; // created var

    do { // what should the function do
        const userInput = prompt("Enter number of nights you plan to stay in the hotel: ");
        nights = parseInt(userInput); // parsing from str to int -- asking again if answer != int
    } while (isNaN(nights) || nights <= 0); // conditions to re-loop should either of them be true

    const hotelPricePerNight = 140;
    return nights * hotelPricePerNight;
}

function planeRideCost() {
    let destination;

    do {
        destination = prompt("Enter your destination (London, Paris...): ");
    } while (!destination || typeof destination !== "string");

    switch (destination.toLowerCase()) {
        case 'london':
            return 183;
        case 'paris':
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let days;

    do {
        const userInput = prompt("How many days do you plan to rent a car for? ");
        days = parseInt(userInput);
    } while (isNaN(days) || days <=0);

    const pricePerDayCar = 40;
    let totalCarCost = days * pricePerDayCar;

    if (days > 10) {
        totalCarCost *= 0.95;
    }

    return totalCarCost;
}

function totalVacationCost() {
    const hotelCostTotal = hotelCost();
    const planeRideTotal = planeRideCost();
    const rentalCarTotal = rentalCarCost();

    const totalPrice = hotelCostTotal + planeRideTotal + rentalCarTotal;

    console.log(`The hotel cost: $${hotelCostTotal}, the plane tickets cost: $${planeRideTotal}, the car rental cost: $${rentalCarTotal}.`);
    console.log(`Total Vacation Cost: $${totalPrice}`);
}

totalVacationCost();

// ---------
// 5 

// done in other files

// ---------
// 6 

// done in other files

// ---------
// 7 

