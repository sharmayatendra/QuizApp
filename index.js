var readlineSync= require("readline-sync")
var userName =readlineSync.question("Can i have your name? ");
console.log("Welcome " + userName + " Let's check!! How much DO YOU KNOW Yaten? ");
var score = 0;
  var highScore = [{
    name: "Yaten",
    score: "5"
  }];

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!");
    score = score +1;
    
  }else{
    console.log("Wrong!");
    
  }
  console.log("current score is: " + score);
  console.log("----------")
}
  
  var questions = [{
      question: "Where do i live? ",
      answer: "Noida"
  },{
    question: "Favorite junk food? ",
    answer: "Pizza"
  },{
    question: "Favorite color? ",
    answer: "Black" 
  },{
    question: "Favorite Bike? ",
    answer: "Bullet"
  },{
    question: "Favorite Movie? ",
    answer: "Tollywood"
  }];
  
  for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  }
  console.log("YAY! Your Score is " + score);
  console.log("HighScores: ");
  for(var i=0; i<highScore.length; i++){
     console.log(highScore[i].name);
     console.log(highScore[i].score);
  }
