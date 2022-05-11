var test = 26;

var startButton = document.querySelector("#startButton");
var next = document.querySelector("#nextButton");
var timeEl = document.querySelector(".time");
var quizOptions = document.querySelector("#quizOptionContainer");
var answerOne = document.querySelector("#quizAnswerOption1");
var answerTwo = document.querySelector("#quizAnswerOption2");
var answerThree = document.querySelector("#quizAnswerOption3");
var answerFour = document.querySelector("#quizAnswerOption4");

var secondsLeft = 80;


// Start button trigger the first question and next button to display
startButton.addEventListener("click", function(){
    
    setTime();
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
  

