var questions = [{
    question: "Pergunta 1",
    choices: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
    correctAnswer: 1
}, {
    question: "Pergunta 2",
    choices: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
    correctAnswer: 2
}, {
    question: "Pergunta 3",
    choices: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
    correctAnswer: 1
}, {
    question: "Pergunta 4",
    choices: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
    correctAnswer: 0
}, {
    question: "Pergunta 5",
    choices: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
    correctAnswer: 0
}];



var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var teste = document.getElementById('teste');

$(document).ready(function () {

    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Selecione uma Resposta");
                $(document).find(".quizMessage").show();
            } else {
             
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();

                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Próxima pergunta");
            //resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

/*function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}*/

function displayScore() {
    $(document).find(".quizContainer > .result").show();
    teste.innerHTML = document.write='Você acertou: ' + correctAnswers + ' de ' + questions.length + ' perguntas!<br>Mas isso não é o suficiente para sobreviver ao mundo das startups. <b><a href="#services">AQUI</a></b> você terá tudo o que precisa saber!';
}

function hideScore() {
    $(document).find(".result").hide();
}