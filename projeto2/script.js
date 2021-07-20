let relogioDigital = document.querySelector('.digital');
// console.log(relogioDigital);
let seconds = document.querySelector('.p_s');
let minutes = document.querySelector('.p_m');
let hours = document.querySelector('.p_h');

function updateClock(){
  let now = new Date();
  let hoursTime = now.getHours();
  let minuteTime = now.getMinutes();
  let secondTime = now.getSeconds();

  relogioDigital.innerHTML = `${fixZero(hoursTime)}:${fixZero(minuteTime)}:${fixZero(secondTime)}`;

  let sdeg = ((360 / 60) * secondTime) - 90;
  let mdeg = ((360 / 60) * minuteTime) - 90;
  let hdeg = ((360 / 12) * hoursTime) - 90;


  seconds.style.transform = `rotate(${sdeg}deg)`;
  minutes.style.transform = `rotate(${mdeg}deg)`;
  hours.style.transform = `rotate(${hdeg}deg)`;
}

function fixZero(time){
  let transforme = time < 10 ? '0'+time : time;
  return transforme;
}

setInterval(updateClock, 1000);
updateClock();