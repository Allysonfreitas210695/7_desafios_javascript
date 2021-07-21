const formResult = document.querySelector('.busca');

formResult.addEventListener('submit',async function(event) {
  event.preventDefault();
  
  inputResult = document.querySelector('#searchInput').value;
  
  if(inputResult !== ''){
    clearInfo();
    showWarning('Loading...');

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputResult)}&appid=4e4f5f229646a4f94721718155956e6b&units=metric&lang=pt_br`;

    
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      if(json.cod === 200){
        showInfo({
          name: json.name,
          country: json.sys.country,
          temp: json.main.temp,
          tempIcon: json.weather[0].icon,
          windSpeed: json.wind.speed,
          windAngle: json.wind.deg
        });
      }else{
        clearInfo();
        showWarning("Cidade nao encontrada!");
      }

  }else{
    clearInfo();
  }
  
})

//parte 1
function showWarning(message) {
  document.querySelector('.aviso').innerHTML = message;

}
//parte 2
function showInfo(json) {
  showWarning('');
  
  document.querySelector('.titulo').innerHTML = `${json.name} - ${json.country}`;
  
  document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
  
  document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
  
  document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
  
  document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;
  
  document.querySelector('.resultado').style.display = 'block';
}

//parte 3
function clearInfo(){
  showWarning('');
  document.querySelector('.resultado').style.display = 'none';
  
}