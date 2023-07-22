const aipKey = "2b4590b0769d1266f43797f6b335def0";
const aipUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

// const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
     const response = await fetch( aipUrl + city + `&appid=${aipKey}`);
     var data = await response.json(); 
     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     
//     if (data.weather[0].main == "Clouds"){
//      weatherIcon.src = "images/clouds.png";
//     }
//     else if (data.weather[0].main == "Rain"){
//      weatherIcon.src = "images/rain.png";
//     }
//     else if (data.weather[0].main == "Drizzle"){
//           weatherIcon.src = "images/drizzle.png";}
//     else if (data.weather[0].main == "Mist"){
//           weatherIcon.src = "images/mist.png";}
//      else { weatherIcon.src = "images/clear.png";}
// }

     const cone = data.weather[0].main;
     weatherIcon.src = "images/" + cone + ".png";
}



searchBtn.addEventListener("click", ()=>{
     checkWeather(searchBox.value);
});