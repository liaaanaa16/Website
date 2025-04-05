const questions = [
  { q: "What is the capital of France?", a: "Paris" },
  { q: "What color is the sky on a clear day?", a: "blue" },
  { q: "What is the opposite of 'cold'?", a: "hot" },
  { q: "What planet do we live on?", a: "Earth" },
  { q: "What do bees make?", a: "honey" },
  { q: "What animal barks?", a: "dog" },
  { q: "What do you use to write?", a: "pen" },
  { q: "Where do fish live?", a: "water" },
  { q: "What fruit is yellow and long?", a: "banana" },
  { q: "What do you call a baby cat?", a: "kitten" }
];

let currentAnswer = "";

function generateQuestion() {
  const random = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").textContent = random.q;
  currentAnswer = random.a.toLowerCase();
  document.getElementById("answerInput").value = "";
  document.getElementById("result").textContent = "";
}

function submitAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (userAnswer === currentAnswer) {
    result.textContent = "Correct!";
    result.className = "correct";
  } else {
    result.textContent = `Wrong! The correct answer is: ${currentAnswer}`;
    result.className = "wrong";
  }
}
