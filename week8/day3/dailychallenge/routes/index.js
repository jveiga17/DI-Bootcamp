// imports modules needed
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router(); // instance to def routes

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let userScore = 0;

router.use(bodyParser.json()); // setting router to parse incoming JSON data in reqs

// GET /quiz
router.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) { // checking if there are more questions
    const currentQuestion = triviaQuestions[currentQuestionIndex].question; // then ask
    res.json({ question: currentQuestion });
  } else {
    res.json({ message: 'Quiz completed. Check your score with /quiz/score' });
    currentQuestionIndex = 0;
    userScore = 0;
  }
});

// POST /quiz
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;

  if (currentQuestionIndex < triviaQuestions.length) {
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {  // answer comparison
      userScore++; // add point
      res.json({
        message: 'Correct! Your current score is ' + userScore,
        question: getNextQuestion(),
      });
    } else {
      res.json({
        message: 'Incorrect. The correct answer is ' + correctAnswer,
        question: getNextQuestion(),
      });
    }
  } else {
    res.json({ message: 'Quiz completed. Check your score with /quiz/score' });
    currentQuestionIndex = 0;
    userScore = 0;
  }
});

// GET /quiz/score
router.get('/score', (req, res) => {
  res.json({ score: userScore });
});

// Helper function to get the next question
function getNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < triviaQuestions.length) {
    return triviaQuestions[currentQuestionIndex].question;
  } else {
    return null; // no more questions
  }
}

module.exports = router;
