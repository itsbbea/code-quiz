var currentQuestion;

// Function to display a question
function displayQuestion(questionIndex) {
    var currentQuestion = questions[questionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    var choicesList = document.getElementById("choices");
    choicesList.innerHTML = ""; // *Clears previous choices*
    
    currentQuestion.choices.forEach(function (choice, index) {
        var listItem = document.createElement("button");
        listItem.textContent = choice;
        listItem.id = "choice-" + (index + 1);
        listItem.addEventListener("click" , checkAnswer)
        choicesList.appendChild(listItem);
    });
}

// Call displayQuestion to display the first question when the quiz starts
displayQuestion(0);

// Get references to the sections
var introSection = document.getElementById("intro-section");
var questionSection = document.getElementById("question-section");

// Get reference to the "Start Quiz" button

var startButton = document.getElementById("start-button");

var currentQuestionIndex = 0;
var score = 0; // Add a score variable to keep track of the user's score

// Function to check the user's answer and move to the next question
function checkAnswer(event) {
    var selectedChoice = event.target.textContent;
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.answer) {
        // Correct answer, increment the score
        score++;
        alert("Correct!")
    }

    else {
        secondsLeft -= 15;
        alert ("Incorrect")
    }

    // Increment the current question index
    currentQuestionIndex++;

    // Check if there are more questions to display
    if (currentQuestionIndex !== questions.length) {

    
        // Move to the next question
        displayQuestion(currentQuestionIndex);
    } else {
        // All questions have been answered, show the user's score or do something else
        endQuiz();
        alert("Quiz completed! Your score is: " + score);
        
    }
    

}

// Add an event listener to the "Start Quiz" button
startButton.addEventListener("click", function () {
    // Hide intro section
    introSection.style.display = "none";
    setTime();

    // Show the quiz section
    questionSection.style.display = "block";
    


});

var timerEl = document.querySelector("#timer");
var mainEl = document.getElementById("question-section");

var secondsLeft = 60;
var timerInterval
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        // secondsLeft = secondsLeft -10;
        timerEl.textContent = "Time " + secondsLeft ;
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }




    }, 1000);

}

function endQuiz() {
    clearInterval(timerInterval);
    console.log("end quiz")

    var userScore = score; 

    // Display the user's score
    // alert(scoreMessage);

    var endSection = document.getElementById("end-section");

    endSection.style.display = "block"
    questionSection.style.display = "none"
    var userScoreEl = document.getElementById("user-score");
    userScoreEl.textContent = userScore


    
    // Add an event listener to the submit button
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        var userInitials = initialsInput.value;
        alert("User's initials: " + userInitials);
    });

}





