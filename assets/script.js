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
console.log(questionSection)

// Get reference to the "Start Quiz" button

var startButton = document.getElementById("start-button");

var currentQuestionIndex = 0;
var score = 0; // Add a score variable to keep track of the user's score

// Function to check the user's answer and move to the next question
function checkAnswer(event) {
    var selectedChoice = event.target.textContent;
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.answer) {
        // Correct answer, so increment the score
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
    if (currentQuestionIndex < questions.length) {
        // Move to the next question
        displayQuestion(currentQuestionIndex);
    } else {
        // All questions have been answered, show the user's score or do something else
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

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        // secondsLeft = secondsLeft -10;
        timerEl.textContent = "Time " + secondsLeft ;
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
        }




    }, 1000);

}

// // Attach the event listener to each answer choice when displaying questions
// currentQuestion.choices.forEach(function (choice, index) {
//     console.log(currentQuestion)
//     var listItem = document.createElement("li");
//     listItem.textContent = choice;
//     listItem.id = "choice-" + (index + 1);
//     listItem.addEventListener("click", checkAnswer); // Attach click event to check answer
//     choicesList.appendChild(listItem);
// });


