const button = document.querySelector('#submit-city');
const input_city = document.querySelector('#input-city');

const city_name = document.querySelector('#city-name');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const displayContainer = document.querySelector('.detail-section');

let city = "";
button.addEventListener('click',()=>{
    city = input_city.value;
    input_city.value = "";
    // console.log(city);
    getInputData(city);
})
const getInputData = (city) => {
    let apiKey = '5a42ba6bd023546ed2ca299e6236b43e'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
    .then((res)=>{
        if(res.ok){
            return res.json();
        }else{

            return new Error(`Error message: ${res.status}`);
        }
    })
    .then((data)=>{
        console.log(data)
        displayWeatherData(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}
const displayWeatherData = (data) => {
    city_name.innerHTML = `City name: <br> ${data.name}`;
    

    temperature.innerHTML = `Temperature:<br>${Math.round(data.main.temp-273)}°`;

    description.innerHTML = `Description:<br>${data.weather[0].description}`;
}