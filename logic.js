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
// variables for targeting html elements/atrrtibutes
const timerEl = document.getElementById("countdownTimer");
const startBtnEl = document.getElementById("startTimer");
const startScreen = document.getElementById("startScreen");
const choices = document.getElementById("choices");
const containerEl = document.getElementById("container");
const quizArea = document.getElementById("quizArea");
const questArea = document.getElementById("questions");
const results = document.getElementById("endDiv");

// quiz start score of 0
let score = 0;
// start on first question
let currentQuestion = 0;

// timer ***change back to 15sec***
let timeLeft = 45;
let holdTime = 0;
let penalty = 3;
let btn;

const checkAnswer = () => {
  let choice = this.value;
  let correctAn = quizQuestions[currentQuestion].correctAnswer;
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
};

// start quiz function
const startQuiz = () => {
  //render question
  let quest = quizQuestions[currentQuestion].question;
  questArea.textContent = quest;

  //render choices as buttons
  let options = quizQuestions[currentQuestion].answers;

  for (let i = 0; i < options.length; i++) {
    btn = document.createElement("button");
    btn.value = options[i];
    btn.textContent = options[i];
    btn.onclick = checkAnswer;
    choices.appendChild(btn);
  }
};

const showResult = () => {
  timerEl.textContent = "";
  clearInterval(holdTime);
  alert(`You got ${score} / ${quizQuestions.length}`);

  quizArea.className = "hide";
  results.className = "show";
};

startBtnEl.addEventListener("click", function () {
  startScreen.className = "hide";
  quizArea.className = "show";

  startQuiz();

  if (holdTime === 0) {
    holdTime = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft < 0) {
        showResult();
      }
    }, 1000);
  }
});
