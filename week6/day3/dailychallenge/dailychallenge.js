let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// arrow function to display fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

// arrow to clone and modify groceries
const cloneGroceries = () => {
    // copy the client variable
    let user = client;

    // changing value of the client variable
    client = "Betty";

    // Copying groceries object
    let shopping = { ...groceries };

    // Changing value of the totalPrice key
    shopping.totalPrice = "35$";

    // Changing value of the paid key
    shopping.other.paid = false;

    // log modified values
    console.log("Modified values in cloneGroceries function:");
    console.log("user:", user); 
    console.log("client:", client);
    console.log("shopping:", shopping);
}

displayGroceries();

cloneGroceries();
