
var currentQuestion = 0;
var score = [0,0,0,0];
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
var answer_stack = ["","","",""];

function loadQuestion(questionIndex){
	var q = questions[questionIndex];
	console.log(q);
	questtionE1.textContent = (questionIndex + 1) + '. ' + q.question;
	op1.textContent = q.option1.resposta;
	 $(".btn-block").removeClass("active");
	op2.textContent = q.option2.resposta;	
	op3.textContent = q.option3.resposta;
	op4.textContent = q.option4.resposta;

	answer_stack[0] = q.option1.stack;
	answer_stack[1] = q.option2.stack;
	answer_stack[2] = q.option3.stack;
	answer_stack[3] = q.option4.stack;
};


function resetQuiz(){
	currentQuestion = 0;
	score = [0,0,0,0];
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

	var answer = answer_stack[selectedOption.value];	
	console.log("answer: "+answer);
	switch(answer){
		case "hacker":		
			score[0] +=1;
			break;
		case "hustler":
			score[1] +=1;
			break;
		case "hyper":
			score[2] +=1;
			break;
		case "hipster":
			score[3] +=1;
			break;
	}

	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent = 'Finalizar';
	}

	if(currentQuestion == totalQuestions){
		console.log(score);
		var pos = -1;
		var stack_val = -1;
		
		for(var i = 0;i < score.length; i++){			
			if(score[i] >= stack_val){
				stack_val = score[i];
				pos = i;
			}
		}
		
		var stack = stacks[pos];
				
		container.style.display = 'none';
		resultCont.style.display = '';
		//resultCont.textContent = 
		$("#result-title").html('Você é: ' + stack.stack);
		$('#stack-img').attr("src",stack.imagem);
		$('#descricao-text').html(stack.descricao);
		$('#stack-text').html(stack.texto);
		$('#descricao').show();
		return;
	}
	loadQuestion(currentQuestion);
}

function goToLanding(){
	 window.location.href = "/"
}

function beginQuiz(){
	$("#quiz-intro").hide();
	$("#quizContainer").show();
}

loadQuestion(currentQuestion);