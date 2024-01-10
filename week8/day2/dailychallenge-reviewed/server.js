// reviwed
// importing
import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";

// instance
const app = express();

// getting absolute path
const __dirname = path.resolve();
// console.log(__dirname);

// serving static files
app.use("/", express.static(__dirname + "/public"));

// parsing
app.use(express.urlencoded({ extended: true })); // URL-encoded data, like from forms
app.use(express.json()); //  JSON data from incoming reqs

// setting port
app.listen(3001, () => {
  console.log("run on 3001");
});

// GET endpoint
app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({ shuffleEmojis, randomEmoji });
});

// POST endpoint
app.post("/emojis", (req, res) => {
  const { name, guess } = req.body;
  if (name === guess) return res.json({ message: "Correct" });
  res.json({ message: "Not Correct" });
});

// suffling array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
