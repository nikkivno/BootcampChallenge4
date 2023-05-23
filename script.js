// Start Quiz button takes you to first question

// Timer starts counting down from 5 minutes

var timeEL = document.getElementsByClassName("timer")

function setTime() {
    var timerInterval = setINterval(function() {
        secondsLeft--;
        timeEL.textContent = "Time Left: " + secondsLeft;
    }, 300000);
}

// Option for time to be deducted if the user answers incorrectly

// Next question button takes user to the second question

// Repeat lines 2-4 until 5th question

//After last question (5) is answered 'Finish Quiz" button takes you to results

// Connect Results page to answers given from questions 1-5 along with your total time it took you to complete it

// Retake quiz button can start you again
