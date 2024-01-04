const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

// convert the JS object to a JSON object
const marioGameJSON = JSON.stringify(marioGame);

// pretty print the JSON object
const prettyMarioGameJSON = JSON.stringify(marioGame, null, 2);

// console.log the results to the console
console.log("Regular JSON:", marioGameJSON);
console.log("Pretty Printed JSON:", prettyMarioGameJSON);
