// 1 
const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
      },
      {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
      },
      {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
      },
      {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
      },
     
];

const usernames = [];

gameInfo.forEach(player => {
    usernames.push(player.username + '!');
});

console.log(usernames);

// output: ["john!", "becky!", "susy!", "tyson!"]

// 2 

const winners = [];

gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log(winners);

// output: ["becky", "susy"]

// 3 

let totalScore = 0;

gameInfo.forEach(player => {
    totalScore += player.score;
});

console.log("The total score is:", totalScore);

// output: The total score is: 71


