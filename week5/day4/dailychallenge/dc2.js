// one loop

const numberOfRows = 6;

for (let i = 1; i <= numberOfRows; i++) {
  console.log("* ".repeat(i));
}

// nested loops

const numberOfRows2 = 6;

for (let i = 1; i <= numberOfRows2; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
