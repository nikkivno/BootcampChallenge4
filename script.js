// Start Quiz button takes you to first question

// Timer starts counting down from 5 minutes

// Option for time to be deducted if the user answers incorrectly

// Next question button takes user to the second question

// Repeat lines 2-4 until 5th question

//After last question (5) is answered 'Finish Quiz" button takes you to results

// Connect Results page to answers given from questions 1-5 along with your total time it took you to complete it

// Retake quiz button can start you again

var questions = [
    { 
        question: "Who finished writing Robert Jordan's 'Wheel of Time' epic fantasy series after his passing?",
        answers: [
            {text: "Neil Gaiman", correct: false},
            {text: "Terry Pratchett", correct: false},
            {text: "Brandon Sanderson", correct: true},
            {text: "R.F. Kuang", correct: false},
        ]
    },
    { 
        question: "Which book centres around a human pulled into the land of the Fae?",
        answers: [
            {text: "From Blood and Ash", correct: false},
            {text: "A Court of Thorns and Roses", correct: true},
            {text: "Red Rising", correct: false},
            {text: "Coraline", correct: false},
        ]
    },
    { 
        question: "In 'From Blood and Ash' what is Hawke's real name?",
        answers: [
            {text: "Casteel", correct: true},
            {text: "Keiran", correct: false},
            {text: "Nyktos", correct: false},
            {text: "Malik", correct: false},
        ]
    },
    { 
        question: "Which of Neil Gaiman's book's explores a war between ancient gods and new gods?",
        answers: [
            {text: "Norse Mythology", correct: false},
            {text: "The Ocean at the End of the Lane", correct: false},
            {text: "Neverwhere", correct: false},
            {text: "American Gods", correct: true},
        ]
    },
    { 
        question: "Who wrote the novel 'Fourth Wing'?",
        answers: [
            {text: "Sarah J. Maas", correct: false},
            {text: "Rebecca Yarros", correct: true},
            {text: "Jennifer L. Armentrout", correct: false},
            {text: "Katie Roberts", correct: false},
        ]
    }
]

var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers-list");
var startBtnEl = document.querySelector(".start-button");


function startHandler() {
    // unhide questions container
    var qContainerEl = document.querySelector(".quiz-container")
    qContainerEl.classList.remove("hide")
    // Hide rules
    var rulesContainerEl = document.querySelector(".rules")
    rulesContainerEl.classList.add("hide")
    // populate questions and answers
    displayQuestion()
    // start timer 

}


function displayQuestion() {
questionEl.textContent=questions[0].question
for(var i=0; i<questions[0].answers.length; i++){
    var btnEl=document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.textContent=questions[0].answers[i].text
    var brEl = document.createElement("br")
    btnEl.append(brEl)
    answerEl.append(btnEl)
}
}

var timerEl = document.querySelector(".timer");
var timeLeft = 300; //5 minutes


var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;  
    } else {
        timerEl.textContent = " ";
        clearInterval(timeInterval);
        displayMessage();    
    } 
}, 1000);

// function timerEl(){
//     var minutes = Math.floor (seconds / 60);
//     var extraSeconds = seconds % 60;
// }



startBtnEl.addEventListener("click", startHandler);