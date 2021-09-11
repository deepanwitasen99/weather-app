var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var description = document.querySelector('.description');
var temperature = document.querySelector('.temperature');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=69b4b7acd0debf058a30e8530e4eca44')
.then(Response => Response.json())
.then(data => {
var nameValue = data['name'];
var temperatureValue = data['main']['temp'];
var descriptionValue = data['weather'][0]['description'];

name.innerHTML = nameValue;
temperature.innerHTML = temperatureValue;
description.innerHTML = descriptionValue;
})

.catch(err => alert("Wrong City Name!"))
})