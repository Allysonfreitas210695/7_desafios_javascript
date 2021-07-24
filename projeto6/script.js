// initial Data

let currentQuestion = 0;
let currentAnswer = 0;

//events
document.querySelector('.scoreArea button').addEventListener('click',resetEvent);

showQuestion();
// functions
function showQuestion() {
  if(questions[currentQuestion]){
    let q = questions[currentQuestion];

    let pct = Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector('.progress--bar').style.width =`${pct}%`;
    
    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';

    document.querySelector('.question').innerHTML = q.question;
    document.querySelector('.options').innerHTML = '';

    let optionsHTML = '';
    for(let i in q.options){
      optionsHTML += `<div  data-op=${i} class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
    }

    document.querySelector('.options').innerHTML += optionsHTML;

    document.querySelectorAll('.options .option').forEach((item) => {
      item.addEventListener('click', optionClickEvent)
    })
    
  }else{
    //acabaram as questoes
    finisQuiz();
  }
}

function optionClickEvent(e){
  let dataOption = parseInt(e.target.getAttribute('data-op'));

  if(questions[currentQuestion].answer === dataOption){
    currentAnswer += 1;
  }

    currentQuestion +=1;
    showQuestion(); 
}

function  finisQuiz(){
  let points = Math.floor((currentAnswer / questions.length) * 100);

  if(points < 30){
    document.querySelector('.scoreText1').innerHTML = 'Tá Ruim hein!?';
    document.querySelector('.scorePct').style.color = '#FF0000';
   
  }else if(points >= 30 && points < 70){
    document.querySelector('.scoreText1').innerHTML = 'Muito Bom!';
    document.querySelector('.scorePct').style.color = 'blue';
  }else{
    document.querySelector('.scoreText1').innerHTML = 'Parabéns';
    document.querySelector('.scorePct').style.color = 'green';
  }

  document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
  document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentAnswer}.`;

  document.querySelector('.scoreArea').style.display = 'block';
  document.querySelector('.questionArea').style.display = 'none';
  document.querySelector('.progress--bar').style.width =`100%`;
}

function resetEvent(){
  currentAnswer = 0;
  currentQuestion = 0;
  showQuestion();
}