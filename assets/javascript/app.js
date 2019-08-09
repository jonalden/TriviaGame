const allQuestions = [{
    question: "The moon is a/an _________ of the Earth",
    choices: ["Crazy Aunt", "Sattelite", "Essential oil", "Annoying Neghbor"],
    correctAnswer: 1
},

{
    question: "The moon's gravitational pull affects what?",
    choices: ["The ocean's tides", "Web development", "Your mood", "The winner of the Superbowl"],
    correctAnswer: 0
},

{
    question: "Which Apollo mission landed on the moon?",
    choices: ["Apollo Creed", "Apollo Apollo", "Apollo 11", "Apollo 2,976"],
    correctAnswer: 2
},

{
    question: "2 full moons in the same month is called what",
    choices: ["Blue Moon", "Something sugary", "Lunch", "Supper"],
    correctAnswer: 0
},

{
    question: "What is the average distance of the moon from the Earth?",
    choices: ["7 inches", "238,900 miles", "A Buzz Lightyear", "Three"],
    correctAnswer: 1
},

{
    question: "What is the name of the landing site of the Apollo moon landing?",
    choices: ["Milk", "Sea of Tranquility", "Area 51", "Valhalla"],
    correctAnswer: 1
},

{
    question: "A person weighs ___ of their body weight when they are on the moon? ",
    choices: ["200%", "A really big number", "1/6", "seven"],
    correctAnswer: 2
},

{
    question: "Elon Musk thinks that we could get back on the moon within how long?",
    choices: ["A couple hours", "It's not possible", "You know, whenever", "2 years"],
    correctAnswer: 3
},

{
    question: "HOw many golf balls are sitting on the moon?",
    choices: ["3", "The moon is one big golf ball", "1,000,000", "Zero"],
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

// game over function to show reults
function gameOver () {
  counterElement.style.display = "none";
  document.getElementById("quiz-view").style.display = "none";
  const htmlString = document.createElement("div");
  htmlString.innerHTML = 
  "RESULTS....<br>" +
    "<br>Correct:" + scoreKeeper.correct +
    "<br>Incorrect:" + scoreKeeper.incorrect +
    "<br>Unaswered:" + scoreKeeper.blank;
  htmlString.classList.add("result");
  document.getElementById('result').append(htmlString);
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






