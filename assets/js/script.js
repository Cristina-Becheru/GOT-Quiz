/* General variables */
document.addEventListener("DOMContentLoaded", function () {
    let questionNumber = 0;
    let totalCorrect = 0;
    let optionFinal = 0;

    const allQuestions = [
        {
            question: "How many swords make up the Iron Throne?",
            choices: ["500", "1000", "2000", "5000"],
            answer: 1
        },

        {
            question: "What does Valar Morghulis mean?",
            choices: ["All men must die", "What is dead may never die", "Never say never", "All men must first live"],
            answer: 0
        },
        {
            question: "What House rules the Kingdom of the North?",
            choices: ["Tully", "Tyrell", "Stark", "Martell"],
            answer: 2
        },
        {
            question: "What is Jon Snow's real name?",
            choices: ["Jon", "Aerys", "Aegon", "Rhaegar"],
            answer: 2
        },
        {
            question: "On which continent are the Seven Kingdoms located?",
            choices: ["Essos", "Westeros", "Hyboria", "Valyria"],
            answer: 1
        },
        {
            question: "What is the name of Arya's direwolf?",
            choices: ["Nymeria", "Lady", "Ghost", "Grey Wind"],
            answer: 0
        },
        {
            question: "Who betrays Robb Stark at the Red Wedding?",
            choices: ["Randyll Tarlly", "Balon Greyjoy", "Walder Frey", "Hoster Tully"],
            answer: 2
        },
        {
            question: "How many seasons of the Game of Thrones series are there?",
            choices: ["Four", "Five", "Seven", "Eight"],
            answer: 3
        },
        {
            question: "HBO's Game of Thrones is adapted from what series of novels?",
            choices: ["A song of ice and fire", "Earthsea", "The broken empire", "The kingkiller chronicle"],
            answer: 0
        },
        {
            question: "What is the name of the last surviving dragon in Game of Thrones?",
            choices: ["Drogon", "Rhaegal", "Viserion", "Tatsu"],
            answer: 0
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

            comment: "You know nothing Jon Snow!"
        },
    ];

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
        document.querySelector("ul").style.display = "none";
        const scoreText = `You Scored ${totalCorrect} out of ${allQuestions.length}.`;
        let resultText;

        if (totalCorrect >= 7) {
            resultText = scoreText + result[0].comment;
        }
        if (totalCorrect >= 2) {
            resultText = scoreText + result[1].comment;
        }
        if (totalCorrect <= 2) {
            resultText = scoreText + result[2].comment;
        }
        console.log(totalCorrect, resultText);
        document.getElementById("quiz-questions").textContent = resultText;

        document.getElementById("play-again-container").style.display = "block";
        restart();
    }

    function restart() {
        document.getElementById("play-again").addEventListener("click", function () {
            questionNumber = 0;
            totalCorrect = 0;
            optionFinal = 0;

            start();
            document.getElementById("play-again-container").style.display = "none";
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
    // Event listener for answer buttons
    document.querySelectorAll('.submit-answer').forEach(function (button) {
        button.addEventListener("click", function (event) {
            var userAnswer = parseInt(event.target.id);
            answerCheck(userAnswer);

            setTimeout(function () {
                document.querySelectorAll(".submit-answer").forEach(function (btn) {
                    btn.classList.remove("correctStyle", "incorrectStyle");
                });
                start();
            }, 1500);

            questionNumber++;
        });
    });

    // Start the quiz
    start();
});