const allQuestions = [{
    question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
    choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest", "Mountain"],
    correctAnswer: 1
},

{
    question: "Does England have a 4th of July?",
    choices: ["Yes", "No", "I don't know", "maybe"],
    correctAnswer: 0
},

{
    question: "What is Rupert the bear's middle name?",
    choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
    correctAnswer: 2
},

{
    question: " What can you never eat for breakfast? ",
    choices: ["Dinner", "Something sugary", "Lunch", "Supper"],
    correctAnswer: 0
},

{
    question: "If there are three apples and you took two away, how many do you have?",
    choices: ["One", "Two", "None", "Three"],
    correctAnswer: 1
},

{
    question: "Spell 'Silk' out loud, 3 times in a row. What do cows drink?",
    choices: ["Milk", "Water", "Juice", "Cows can't drink"],
    correctAnswer: 1
},

{
    question: "Which is heavier, 100 pounds of rocks or 100 pounds of gold? ",
    choices: ["100 pounds of rocks", "100 pounds of rocks", "They weigh the same", "seven"],
    correctAnswer: 2
},

{
    question: "Can you spell 80 in two letters?",
    choices: ["AI-TY", "It's not possible", "EIGH-TY", "A-T"],
    correctAnswer: 3
},

{
    question: "What question must always be answered ''Yes''?",
    choices: ["What does Y-E-S spell?", "Will everyone die someday?", "Does everyone have a biological mother?", "Are you a human?"],
    correctAnswer: 0
}];

let timer;
let scoreKeeper = {
  correct:0,
  incorrect:0,
  blank:0,
  timeLeft:2*60*1000
};

function millisToMinutesAndSeconds (millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

// Timer
var counterElement = document.getElementById("timer");
let countDown = function () {

  scoreKeeper.timeLeft -= 1000;

  // check if timer runs out
  if (scoreKeeper.timeLeft > 0) {

    // update element with current time left
    counterElement.innerHTML = "Time Left: " + millisToMinutesAndSeconds(scoreKeeper.timeLeft);

  } else {

    counterElement.innerHTML = "0";
    gameOver();
  }
}



// starts quiz
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {

  setInterval(countDown, 1000);

  startButton.style.display = "none";

  // show quiz
  document.getElementById("quiz-view").style.display = "block";

});


function gameOver () {
  counterElement.style.display = "none";
  document.getElementById('quiz-view').style.display = "none";
  const htmlString = "RESULTS...." +
    "<br>Correct:" + scoreKeeper.correct +
    "<br>Incorrect:" + scoreKeeper.incorrect +
    "<br>Unaswered:" + scoreKeeper.blank
  document.getElementById('result').innerHTML = htmlString;
}


// display the questions and choices
for (let i = 0; i < allQuestions.length; i++) {

  let objQuestion = allQuestions[i];
  let questionForm = document.getElementById("questionForm");
  let orderNumber = i + 1;
  questionForm.innerHTML += "<h4>" + orderNumber + ". " + objQuestion.question + "</h4>" +
      '<ul>' +
        '<fieldset id="group' + i + '">' +
          '<li><input class="test-choices" type="radio" name="group' + i + '" value="0">' + objQuestion.choices[0] + '</li>' +
          '<li><input class="test-choices" type="radio" name="group' + i + '" value="1">' + objQuestion.choices[1] + '</li>' +
          '<li><input class="test-choices" type="radio" name="group' + i + '" value="2">' + objQuestion.choices[2] + '</li>' +
          '<li><input class="test-choices" type="radio" name="group' + i + '" value="3">' + objQuestion.choices[3] + '</li>' +
        '</fieldset>' +
      '</ul>';
}



let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(){
  getScore();
  gameOver();
});


function getScore () {

  let ulElements = document.getElementsByTagName("ul");

  // go through ul elements
  for (let i = 0; i < ulElements.length; i++) {

    let ulElement = ulElements[i];
    let inputElements = ulElement.getElementsByClassName("test-choices");

    let checked = false;
    let answeredCorrectly = false;
    for (let j = 0; j < inputElements.length; j++) {

      if (inputElements[j].checked) {

        checked = true;

        if (j == allQuestions[i].correctAnswer) {
          answeredCorrectly = true;
        }
      }
    }

    if (answeredCorrectly) {
      scoreKeeper.correct += 1;
    } else {

      if (checked == true) {
        scoreKeeper.incorrect += 1;
      } else {
        scoreKeeper.blank += 1;
      }
    }
  }
}






