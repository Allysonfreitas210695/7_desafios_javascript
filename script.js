document.body.addEventListener('keyup', (event)=> {
  playSound(event.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click', ()=> {
  let song = document.querySelector('#input').value
 
  if(song !== ''){
    let songArrays = song.split('');
    
    playCompose(songArrays);
  }

})  

function playCompose(elementsArray){
  let wait = 0;

  for(let songItem of elementsArray){
   setTimeout(() => {
     playSound(`key${songItem}`)
   }, wait);

   wait = 250;
  }
}

function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);
  let dataKeys = document.querySelector(`div[data-Key="${sound}"]`);
  // console.log(dataKeys);

  if(audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if(dataKeys){
    dataKeys.classList.add('active');

    setTimeout(()=>{
      dataKeys.classList.remove('active');
    },300)
  }
}