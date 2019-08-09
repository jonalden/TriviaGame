

// when start-button is pressed, hide button and display trivia questions
// create a timer that starts when the user hits the start-game button
// Make an array of questions, choices, and correct answers

let allQuestions = [{
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
},

];

//global variables
let currentQuestion = 0;
let correctAnswers = 0;
let unanswered = 0;


console.log(questionContainer);

let components = "";

function buttonClick() {
    console.log(this)
}
// display the questions and choices
for (let i = 0; i < allQuestions.length; i++) {

    let objQuestion = allQuestions[i];
    let questionContainer = document.getElementById("questionContainer");

    questionContainer.innerHTML += '<h4>' + objQuestion.question + '</h4>' +
        '<ul>' +
        '<li><input type="radio" name="zero" value="0">' + objQuestion.choices[0] + '</li>' +
        '<li><input type="radio" name="zero" value="1">' + objQuestion.choices[1] + '</li>' +
        '<li><input type="radio" name="zero" value="2">' + objQuestion.choices[2] + '</li>' +
        '<li><input type="radio" name="zero" value="3">' + objQuestion.choices[3] + '</li>' +
        '</ul>';

    console.log(objQuestion);
}



// give the user a way to select the answer they think is correct
// return the users guess to the correct win/loss counter
// When timer runs out hide all questions and display user stats
// create a finsh-game button that hides all questions and displays user stats



