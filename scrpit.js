// Questions and their correct answers
const questions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "shakespeare" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "What is the square root of 64?", answer: "8" }
];

let currentQuestion = {};

// Function to pick a random question
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById('question').textContent = currentQuestion.question;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.toLowerCase().trim();
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! Try again.";
        feedback.style.color = "red";
    }
    
    // Clear the input field
    document.getElementById('answer-input').value = "";
}

// Event listeners for button and Enter key
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('answer-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Initialize by loading a random question
getRandomQuestion();

// Button to get a new question
document.getElementById('submit-btn').addEventListener('click', getRandomQuestion);
