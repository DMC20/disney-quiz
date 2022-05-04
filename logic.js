const quizQuestions = [
  {
    question: "What is the name of Wendy's dog in Peter Pan?",
    answers: ["Nana", "Phil", "Steve", "Sid"],
    correctAnswer: "Nana",
  },
  {
    question: "Which Full House character voices Aladdin?",
    answers: ["Bill", "Sid", "Steve", "Eunice"],
    correctAnswer: "Steve",
  },
  {
    question: "What does Hakuna Matata mean?",
    answers: ["IDK", "Love", "Peace", "No Worries"],
    correctAnswer: "No Worries",
  },
  {
    question: "Who is the fashion designer in The Incredibles?",
    answers: ["Daniel", "Mirage", "Frozone", "Edna"],
    correctAnswer: "Edna",
  },
  {
    question: "What was the first Pixar movie?",
    answers: [
      "Cinderella",
      "Monsters Inc",
      "Toy Story",
      "The Emperor`s New Groove",
    ],
    correctAnswer: "Toy Story",
  },
  {
    question:
      "Pongo and Perdita originally had how many puppies in 101 Dalmations?",
    answers: ["13", "8", "25", "15"],
    correctAnswer: "15",
  },
  {
    question: "Who said 'Fish are friends not food'?",
    answers: ["Pacal", "Nemo", "Dory", "Bruce"],
    correctAnswer: "Bruce",
  },
  {
    question: "Who is Miguel's idol in Coco",
    answers: ["Santana", "Ernesto De La Cruz", "Bruno", "Hector"],
    correctAnswer: "Ernesto De La Cruz",
  },
  {
    question: "Mowgli was raised by what animals in The Jungle Book?",
    answers: ["Wolves", "Tigers", "Lions", "Gorillas"],
    correctAnswer: "Wolves",
  },
  {
    question: "What was the name of Jessie’s original owner in Toy Story 2?",
    answers: ["Sandy", "Sam", "Emily", "Gaby"],
    correctAnswer: "Emily",
  },
];
var timerEl = document.getElementById("countdownTimer");
var startBtnEl = document.getElementById("startTimer");
var startScreen = document.getElementById("startScreen");
var choices = document.getElementById("choices");
var containerEl = document.getElementById("container");
var quizArea = document.getElementById("quizArea");
var questArea = document.getElementById("questions");
var results = document.getElementById("endDiv");
var score = document.getAnimations("results");

// quiz start score of 0
var score = 0;
// start on first question
var currentQuestion = 0;

// timer ***change back to 15sec***
var timeLeft = 30;
var holdTime = 0;
var penalty = 3;
var btn;

function checkAnswer() {
  var choice = this.value;
  var correctAn = quizQuestions[currentQuestion].correctAnswer;
  if (choice === correctAn) {
    score++;
  } else {
    timeLeft = timeLeft - penalty;
  }

  document.getElementById("choices").innerHTML = "";

  currentQuestion++;
  if (currentQuestion === quizQuestions.length) {
    showResult();
  } else {
    startQuiz();
  }
}

// start quiz function
function startQuiz() {
  //render question
  var quest = quizQuestions[currentQuestion].question;
  questArea.textContent = quest;

  //render choices as buttons
  var options = quizQuestions[currentQuestion].answers;

  for (let i = 0; i < options.length; i++) {
    btn = document.createElement("button");
    btn.value = options[i];
    btn.textContent = options[i];
    btn.onclick = checkAnswer;
    choices.appendChild(btn);
  }
}

function showResult() {
  timerEl.textContent = "";
  clearInterval(holdTime);
  alert(`You got ${score} / ${quizQuestions.length}`);

  quizArea.className = "hide";
  results.className = "show";
}

// timer function
startBtnEl.addEventListener("click", function () {
  startScreen.className = "hide";
  quizArea.className = "show";

  startQuiz();

  if (holdTime === 0) {
    holdTime = setInterval(function () {
      timeLeft--;
      holdTime.textContent = "You have " + timeLeft;
      timerEl.textContent = timeLeft;

      if (timeLeft < 0) {
        showResult();
      }
    }, 1000);
  }
});
