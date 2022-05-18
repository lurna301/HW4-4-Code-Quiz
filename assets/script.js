var test = 26;

var startButton = document.querySelector("#startButton");
var next = document.querySelector("#nextButton");
var timeEl = document.querySelector(".time");
var quizOptions = document.querySelector("#quizOptionContainer");
var answerOne = document.querySelector("#quizAnswerOption1");
var answerTwo = document.querySelector("#quizAnswerOption2");
var answerThree = document.querySelector("#quizAnswerOption3");
var answerFour = document.querySelector("#quizAnswerOption4");
var quizShow = document.querySelector("#quizCard");
var secondsLeft = 80;
// Create an  array of questions
var questions = [
  {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
  },
  {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
  },
  {
      title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
      choices: ["Inline", "Import", "External", "Internal"],
      answer: "Import",
  },
  {
      title: "How to create an array in js ?",
      choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],

      answer: "var A=[]",
  },
  {   
      title: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
      choices: ["getElementById(‘idname’)", "getElementsByClass(‘classname’)", 
      "getElementsByTagName(‘tagname’)", "querySelectorAll()"],
      answer: "querySelectorAll()",
  }
]



// Start button trigger the first question and next button to display
startButton.addEventListener("click", function(){
    
    setTime();
    quizShow.classList.remove("hide");
    

});
// nextButton.addEventListener("click", () => {
//     quizOptions++
//  setNextQuestion() 
// });

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " second(s) left !";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }
  
// show the question

var questionEl = document.querySelector("#quizQuestion");
function showQuestions(){


 
  for (var i = 0; i < questions.length; i++){

    questionEl.textContent = questions[i].title;

  }  


 
 
 

};

showQuestions();