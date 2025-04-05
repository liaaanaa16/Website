let currentQuestion = '';
let correctAnswer = '';

function generateQuestion() {
  const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the color of the sky?", answer: "blue" }
  ];

  // Select a random question from the array
  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex].question;
  correctAnswer = questions[randomIndex].answer;

  // Update the question on the page
  document.getElementById('question').textContent = currentQuestion;
  document.getElementById('result').textContent = '';
  document.getElementById('answerInput').value = '';
}

function submitAnswer() {
  const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();

  // Check if the answer is correct
  const resultElement = document.getElementById('result');
  if (userAnswer === correctAnswer.toLowerCase()) {
    resultElement.textContent = "Correct!";
    resultElement.className = 'correct';
  } else {
    resultElement.textContent = "Wrong answer. Try again!";
    resultElement.className = 'wrong';
  }
}

// Start with a question when the page loads
generateQuestion();
