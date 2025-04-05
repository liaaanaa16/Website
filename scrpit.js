const questions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answer: "j.k. rowling"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "pacific"
    },
    {
        question: "In what year did the Titanic sink?",
        answer: "1912"
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "leonardo da vinci"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    questionContainer.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestionIndex].answer;
    const response = document.getElementById('response');
    
    if (userAnswer === correctAnswer) {
        response.textContent = "Correct! Moving to the next question.";
        response.style.color = "#2ecc71";
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                loadQuestion();
                response.textContent = "";
                document.getElementById('answer').value = "";
            }, 2000);
        } else {
            response.textContent = "You've completed all the questions!";
            response.style.color = "#2980b9";
            document.getElementById('submit-btn').disabled = true;  // Disable the button after finishing all questions
        }
    } else {
        response.textContent = "Wrong answer, try again!";
        response.style.color = "#e74c3c";
    }
}

window.onload = loadQuestion;
