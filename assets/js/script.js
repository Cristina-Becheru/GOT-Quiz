/* General variables */
document.addEventListener("DOMContentLoaded", function () {
    let questionNumber = 0;
    let totalCorrect = 0;
    let optionFinal = 0;

    const allQuestions = [
    {
        question: "How many swords make up the Iron Throne?",
        choices: ["500", "1000", "2000", "5000"],
        answer: 2
    },

    {
        question: "What does Valar Morghulis mean?",
        choices: ["All men must die", "What is dead may never die", "Never say never", "All men must first live"],
        answer: 1
    },
    {
        question: "What House rules the Kingdom of the North?",
        choices: ["Tully", "Tyrell", "Stark", "Martell"],
        answer: 3
    }
    , {
        question: "What is Jon Snow's real name?",
        choices: ["Jon", "Aerys", "Aegon", "Rhaegar"],
        answer: 3
    }
    , {
        question: "On which continent are the Seven Kingdoms located?",
        choices: ["Essos", "Westeros", "Hyboria", "Valyria"],
        answer: 2
    }
    , {
        question: "What is the name of Arya's direwolf?",
        choices: ["Nymeria", "Lady", "Ghost", "Grey Wind"],
        answer: 1
    }
    , {
        question: "Who betrays Robb Stark at the Red Wedding?",
        choices: ["Randyll Tarlly", "Balon Greyjoy", "Walder Frey", "Hoster Tully"],
        answer: 3
    }
    , {
        question: "How many seasons of the Game of Thrones series are there?",
        choices: ["Four", "Five", "Seven", "Eight"],
        answer: 4
    }
    , {
        question: "HBO's Game of Thrones is adapted from what series of novels?",
        choices: ["A song of ice and fire", "Earthsea", "The broken empire", "The kingkiller chronicle"],
        answer: 1
    }
    , {
        question: "What is the name of the last surviving dragon in Game of Thrones?",
        choices: ["Drogon", "Rhaegal", "Viserion", "Tatsu"],
        answer: 1
    }
];
    const result = [
        // Result for more than 70% correct
        {

            comment: " Well done! You really know Game of Thrones!"
        },
        // Result for scores between 20% and 70% correct
        {

            comment: " Not bad. You've got some Game of Thrones knowledge!"
        },
        // Result for less than 20% correct
        {

            comment: "You know nothing Jon Snow! You might need to rewatch Game of Thrones!"
        },
        // Default result (if the score doesn't fall into the above categories)
        {

            comment: "Dracarys."
        }
    ]});
    //Function for next questions
    function start() {
    fadeIn(document.getElementById('quiz-questions'), 200);

    if (questionNumber !== allQuestions.length) {
        question(questionNumber);
    } else {
        end();
    }
}
// Helper function to fade in an element

function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 10;
    const increment = interval / duration;

    const fadeEffect = setInterval(function () {
        if (opacity < 1) {
            opacity += increment;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, interval);
}

function question(questionNum) {
    const h2Element = document.getElementById('quiz-questions');
    const choicesElements = document.querySelectorAll('.submit-answer');

    h2Element.textContent = allQuestions[questionNum].question;

    allQuestions[questionNum].choices.forEach(function (answers, i) {
        choicesElements[i].innerHTML = answers;
    });
}

function end() {
    finalImage();
    document.querySelector("ul").style.display = "none";
    document.getElementById("quiz-questions").textContent =
        "You scored " +
        totalCorrect +
        " out of " +
        allQuestions.length +
        ". " +
        result[optionFinal].comment;
    document.getElementById("try-again-container").style.display = "block";
    restart();
}
// result according to correct answers
function finalImage() {
    if (totalCorrect < allQuestions.length && totalCorrect >= allQuestions.length * 0.7) {
        optionFinal = 1;
    } else if (
        totalCorrect <= allQuestions.length * 0.6 &&
        totalCorrect >= allQuestions.length * 0.2
    ) {
        optionFinal = 2;
    } else if (totalCorrect !== allQuestions.length) {
        optionFinal = 3;
    }
}

function restart() {
    document.getElementById("try-again").addEventListener("click", function () {
        questionNumber = 0;
        totalCorrect = 0;
        optionFinal = 0;

        start();
        document.getElementById("try-again-container").style.display = "none";
        document.querySelector("ul").style.display = "block";
    });
}

function answerCheck(userAnswer) {
    var correctAnswer = allQuestions[questionNumber].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById(userAnswer).classList.add("correctStyle");
        totalCorrect++;
    } else {
        document.getElementById(userAnswer).classList.add("incorrectStyle");
    }
}