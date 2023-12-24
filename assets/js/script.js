/* General variables */
document.addEventListener("DOMContentLoaded", function () {
    const questionNumberElement = document.querySelector("#quiz-questions");
    const imageContainer = document.getElementById("image");
    const tryAgainContainer = document.getElementById("try-again-container");
    const tryAgainButton = document.getElementById("try-again");
    const answerButtons = document.querySelectorAll(".submit-answer");
});
let questionNumber = 0;
let totalCorrect = 0;
let optionFinal = 0;

const allQuestions = [
    {
        question: "How many swords make up the Iron Throne?",
        choices: ["500", "1000", "2000", "5000"],
        correctAnswer: "1000",
    },

    {
        question: "What does Valar Morghulis mean?",
        choices: ["All men must die", "What is dead may never die", "Never say never", "All men must first live"],
        correctAnswer: "All men must die"
    },
    {
        question: "What House rules the Kingdom of the North?",
        choices: ["Tully", "Tyrell", "Stark", "Martell"],
        correctAnswer: "Stark"
    }
    , {
        question: "What is Jon Snow's real name?",
        choices: ["Jon", "Aerys", "Aegon", "Rhaegar"],
        correctAnswer: "Aegon"
    }
    , {
        question: "On which continent are the Seven Kingdoms located?",
        choices: ["Essos", "Westeros", "Hyboria", "Valyria"],
        correctAnswer: "Westeros"
    }
    , {
        question: "What is the name of Arya's direwolf?",
        choices: ["Nymeria", "Lady", "Ghost", "Grey Wind"],
        correctAnswer: "Nymeria"
    }
    , {
        question: "Who betrays Robb Stark at the Red Wedding?",
        choices: ["Randyll Tarlly", "Balon Greyjoy", "Walder Frey", "Hoster Tully"],
        correctAnswer: "Walder Frey"
    }
    , {
        question: "How many seasons of the Game of Thrones series are there?",
        choices: ["Four", "Five", "Seven", "Eight"],
        correctAnswer: "Eight"
    }
    , {
        question: "HBO's Game of Thrones is adapted from what series of novels?",
        choices: ["A song of ice and fire", "Earthsea", "The broken empire", "The kingkiller chronicle"],
        correctAnswer: "A song of ice and fire"
    }
    , {
        question: "What is the name of the last surviving dragon in Game of Thrones?",
        choices: ["Drogon", "Rhaegal", "Viserion", "Tatsu"],
        correctAnswer: "Drogon"
    }
];
