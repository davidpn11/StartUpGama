
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('resultado');
var description = document.getElementById('descricao');

var container = document.getElementById('quizContainer');
var questtionE1 = document.getElementById('question');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');


function loadQuestion(questionIndex){
	var q = questions[questionIndex];
	questtionE1.textContent = (questionIndex + 1) + '. ' + q.question;
	op1.textContent = q.option1;
	 $(".btn-block").removeClass("active");
	op2.textContent = q.option2;	
	op3.textContent = q.option3;
	op4.textContent = q.option4;
};


function resetQuiz(){
	currentQuestion = 0;
	score = 0;
	loadQuestion(currentQuestion);
	container.style.display = '';
	resultCont.style.display = 'none';
	description.style.display = 'none';
}


function loadNextQuestion (){	
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption){
		alert('Selecione uma opção');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer==answer){
		score+=1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent = 'Finalizar';
	}
	if(currentQuestion == totalQuestions){
		if(score > 3){
			$('#descricao-text').html("Wow! Você nasceu para isso! Para saber o primeiro passo para ingressar em uma startup, acesse esse <a href='/' style='text-decoration: none;' ><b>link.</b></a>");
		}else{
			$('#descricao-text').html("Independente de seu desepenho, há ainda muito mais a explorar no mundo das startups! <a href='/' style='text-decoration: none;' ><b>Saiba Mais!</b></a>");		
		}
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Você acertou: ' + score+"/5";
		$('#descricao').show();
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);