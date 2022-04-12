var currentquestion = 0;

//click the start button//
document.querySelector(".startbutton").addEventListener("click", startquiz);
function startquiz() {
  //start a timer//
  setInterval(myTimer, 1000);
  presentQuestion();
}
function myTimer() {
  if (time < 0) {
    clearInterval();
  } else {
    document.querySelector(".timer").textContent = time;
    time--;
  }
}
var time = 75;
var score = 0;

//present the question//
function presentQuestion() {
  document.querySelector(".question").textContent =
    questions[currentquestion].question;
  document.querySelector(".choiceA").textContent =
    questions[currentquestion].options[0];
  document.querySelector(".choiceB").textContent =
    questions[currentquestion].options[1];
  document.querySelector(".choiceC").textContent =
    questions[currentquestion].options[2];
  document.querySelector(".choiceD").textContent =
    questions[currentquestion].options[3];
}

//user makes a selection//
document.querySelector(".choiceA").addEventListener("click", userchoice);
document.querySelector(".choiceB").addEventListener("click", userchoice);
document.querySelector(".choiceC").addEventListener("click", userchoice);
document.querySelector(".choiceD").addEventListener("click", userchoice);

function userchoice() {
  console.log(this.textContent);
  if (this.textContent === questions[currentquestion].answer) {
    //if right next question//
    currentquestion++;
    presentQuestion();
    //add to the score//
    score++;
    console.log(score);
    console.log("correctAnswer");
  } else {
    //if wrong alert wrong//
    //subtract time from clock//
    time -= 15;
    console.log("wrongAnswer");
  }
}

var questions = [
  {
    question: "What does HTML stands for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Multiple Language",
      "Honda Toyota Mercedes Lamborghini",
      "Hyper Text Markup Language",
      "Hyper Teller Motorized Logo",
    ],
  },
  {
    question: "What does CSS stands for?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Colorful style sheet",
      "Creative solution sleet",
      "Common sense squad",
    ],
  },
  {
    question: "What does API stands for??",
    answer: "Application Programing Interface",
    options: [
      "All People’s interface",
      "Application Programing Interface",
      "All Pink Internet",
      "Alphabetical Pronunciation Index",
    ],
  },
  {
    question: "What does SQL stands for??",
    answer: "Structured Query Language",
    options: [
      "Structured Query Language",
      "Statement Question Language",
      "Stylish Queen Laughing",
      "Space Q Link",
    ],
  },
  {
    question: "What does WWW stands for??",
    answer: "World Wide Web",
    options: [
      "World Wrestling Wishes",
      "Women watch Weather",
      "West World Web",
      "World Wide Web",
    ],
  },
];
