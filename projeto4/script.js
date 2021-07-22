// initial Data
let square = {
  a1: '', a2: '', a3: '',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
}

let player = '';
let warning = '';
let playing = false;

resert();

// eventos
document.querySelector('.reset').addEventListener('click', resert);

document.querySelectorAll('.item').forEach((item)=>{
  item.addEventListener('click', itemClick);
})

//function de click
function itemClick(event) {
  let item = event.target.getAttribute('data-item');
  
  if(playing && square[item] === ''){
    square[item] = player;
    renderSquare();
    togglePlayer();
  }
}

// functions
function resert() {
  warning = '';

  let random = Math.floor(Math.random() * 2);
  player = (random === 0 ? 'X' : 'O');

  for(let i in square) {
    square[i] = ''
  }

  playing = true;

  renderSquare();
  renderInfo();

}

function renderSquare() {
  for(let i in square){
    let item = document.querySelector(`div[data-item=${i}]`);
    item.innerHTML = square[i];
  }

  ckeckGame();
}

function renderInfo() {
  document.querySelector('.vez').innerHTML = player;
  document.querySelector('.resultado').innerHTML = warning;  
}

function togglePlayer(){
  if(player === 'X'){
    player = 'O';
  }else{
    player = 'X';
  }
  renderInfo();
}

function ckeckGame() {
  if(ckeckWinnerFor('X')){
    warning = 'O "x" venceu';
    playing = false;
  } else if(ckeckWinnerFor('O')){
    warning = 'O "O" venceu';
    playing = false;
  }else if(isFull()){
    warning = 'Deu empate';
    playing = false;
  }
}

function ckeckWinnerFor(){
  let pos = [
    'a1,a2,a3',
    'b1,b2,b3',
    'c1,c2,c3',
    'a1,b1,c1',
    'a2,b2,c2',
    'a3,b3,c3',
    'a3,b2,c1',
    'a1,b2,c3',
  ]

  for(let w in pos){
    let pArray = pos[w].split(',');
    let hasWan = pArray.every(option => square[option] === player);
    if(hasWan){
      return true;
    }
  }

  return false;
}

function isFull(){
  for(let i in square){
    if(square[i] === ''){
      return false;
    }
  }

  return true;
}