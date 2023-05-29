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

var answers = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
]

var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers-list");
var startBtnEl = document.querySelector(".start-button");
var nextBtnEl = document.querySelector(".nextBtn");
var gotItRightEl = document.querySelector("#got-it-right");
var resultsEl = document.querySelector(".results");
var qContainerEl = document.querySelector(".quiz-container");
var initialInputForm = document.querySelector(".initialsInput");
var initialValue;
var currentQuestion = 0;

function startHandler() {
    qContainerEl.classList.remove("hide")
    var rulesContainerEl = document.querySelector(".rules")
    rulesContainerEl.classList.add("hide")
    displayQuestion(0)
}


function displayQuestion(questionIndex) {
    questionEl.textContent=questions[questionIndex].question
    clearAnswers();
    for(var i=0; i<questions[questionIndex].answers.length; i++){
    var btnEl=document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.textContent=questions[questionIndex].answers[i].text
    var brEl = document.createElement("br")        
    answerEl.append(btnEl)
    answerEl.append(brEl)
    btnEl.addEventListener("click", (e) => setAnswer(currentQuestion, e.target.innerText))
}
}

function clearAnswers() {
    while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
    }
}

function nextPage() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
    }
    else  {
        qContainerEl.classList.add('hide');
        initialInputForm.classList.remove('hide');
    }
}

function setAnswer(questionNum, answer) {
    var currentQuestion = questions[questionNum];
    var gotItRight = currentQuestion.answers.filter(a => a.text === answer)[0].correct
    answers[questionNum] = gotItRight;
    gotItRightEl.classList.remove("hide")
    if (gotItRight) {
        gotItRightEl.innerText = "Correct!"
    } else {
        gotItRightEl.innerText = "Wrong!"
    }
    setTimeout(function() {
        gotItRightEl.classList.add("hide")
        nextPage()
    }, 2000)
}

function setInitial() {
    initialValue = document.querySelector('#initial-input').value;
    initialInputForm.classList.add('hide');
    resultsEl.classList.remove('hide');
    var initialDisplayEl = document.querySelector('.initials');
    initialDisplayEl.innerText = initialValue;
    var scoreEl = document.querySelector('.score');
    scoreEl.innerText = answers.filter(el => el === true).length;
    localStorage.setItem(initialValue, JSON.stringify({
        userInitials: initialValue,
        score: scoreEl.innerText
    }));
}
                
var timerEl = document.querySelector(".timer");
var timeLeft = 120; 


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



startBtnEl.addEventListener("click", startHandler);