// neeed a jumbotron with title
// Start button to start
//countdown timer from 30 seconds
//Question is asked with 4 multiple choice answers on the screen
//mouse highlights answer choice before a anwser is selected
// answer is selected with a click
//after click it will display either correct or incorrect with a timer
//the correct answer regardless of user choice will also display a gif/video corresponding
//to the correct answer
//after a few seconds the next question on the screen will appear
//if timer hits zero screen will display the correct answer and then move on to the next question
// once last question is answered it will give a summary/score
// timer stops
// correct/incorrect/unanswered with a option to start over
// for start over it does not reload the page
console.log("working");
// end totals
// var totalCorrectAnswers = 0;
// var totalWrongAnswers = 0;
// //Q&A for the game
// var question = [];
// var answer = [];
// var correctAnswer = [];
// var wrongAnswer = [];
// var timer = 30;

//edit
//questions below were for the harder assignment  : ( )
// var firstQuestion = {
// 	question: "Who is the 16th president?",
// 	answers: ["Barrack Obama", "Donald Trump", "Abraham Lincoln", "Richard Nixon"],
// 	rightAnswer: 3,
// }

// var secondQuestion = {
// 	question: "Who is the 16th president?",
// 	answers: ["Barrack Obama", "Donald Trump", "Abraham Lincoln", "Richard Nixon"],
// 	rightAnswer: 3,
// }

// var thirdQuestion = {
// 	question: "Who is the 16th president?",
// 	answers: ["Barrack Obama", "Donald Trump", "Abraham Lincoln", "Richard Nixon"],
// 	rightAnswer: 3,
// }

// var fourthQuestion = {
// 	question: "Who is the 16th president?",
// 	answers: ["Barrack Obama", "Donald Trump", "Abraham Lincoln", "Richard Nixon"],
// 	rightAnswer: 3,
// }

// var fifthQuestion = {
// 	question: "Who is the 16th president?",
// 	answers: ["Barrack Obama", "Donald Trump", "Abraham Lincoln", "Richard Nixon"],
// 	rightAnswer: 3,
// }

// var scoreBoard = {
// 	totalCorrectAnswers: 0,
// 	totalWrongAnswers: 0,
// 	noAnswer: 0,
// 	currentQuestion: 0,
// }
var correctAnswers = 0;
var wrongAnswers = 0;
var correctAnswer = "Chris Stapleton, George R. R. Martin, Google, Kim Jong un our fearless leader!!, 6";
var wrongAnswer = "Garth Brooks, Taylor Ray Holbrook, 50 cent";
//timer
$("#start-button").click(function(){

	
    // $("#start-button").on("click", start); 
    // $("#submit").on("click", finish);
    // $("#restart").on("click", restart);

var myTimer = setInterval(timeCount, 1000);
function myFunc(placeHolder){
	console.log(placeHolder);
};
var countDown = 60;

function timeCount(){
	if(countDown>0){
		myFunc(countDown);
		countDown--;
	$("#timerId").html("<h2>Time Remaining: " + countDown + "</h2>");

	}
	else if (countDown == 0){
			myFunc(countDown);
			alert("Times Up see how you did below!");
			clearStuff();
		}

}
function clearStuff(){
	clearInterval(myTimer);
}
});

  
   

$("input[name='rightAnswer']").click(function() {
    if ($(this).val() === correctAnswer);{
    	    correctAnswers++;
    	        $("#correctAnswers").text("correctAnswers: " + correctAnswers);

  }

$("input[name='wrongAnswer']").click(function() {

    	if ($(this).val() === wrongAnswer);{
    		wrongAnswers++;
   $("#wrongAnswers").text("wrongAnswers: " + wrongAnswers);

    }
});
});

   

   	// if ($(this).val() != [1]);
    // wrongAnswers--;
    // $("#wrongAnswers").text("wrongAnswers: " + wrongAnswers);

    
    // } else if ($(this).val() === '2') {
    //   myOtherFunction();
    // } 
  





//buttons




