// initial Data
let currentColor = "black"; 
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
// pegando o canvas
let screen = document.querySelector('#tela');
let ctx = screen.getContext("2d");
// events
document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener('click', colorClickEvent);
})

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearEvent);


// functions
function colorClickEvent(e){
  let color = e.target.getAttribute('data-color');
  // console.log(color); 
  currentColor = color;

  document.querySelector('.color.active').classList.remove('active');
  e.target.classList.add('active');
}

function mouseDownEvent(e){
  canDraw = true;
  mouseX = e.pageX - e.target.offsetLeft;
  mouseY = e.pageY - e.target.offsetTop;
}

function mouseMoveEvent(e){
  if(canDraw){
    draw(e.pageX, e.pageY);
  }
}

function mouseUpEvent(){
  canDraw = false;
}

function draw(x, y){
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  //desenha
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function clearEvent(){
  ctx.setTransform(1, 0 , 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}