const apiKey = "2d1665e9d61d85e849aef5e8cd0fb506";
const apiURL = "https://api.openweathermap.org/data/2.5/weather";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("City");
const cityName= document.getElementById("cityName");
const temp = document.getElementById("temperature");
const desc = document.getElementById("desc");
const humidity = document.getElementById("humidity");
const wind= document.getElementById("wind");
const icon = document.getElementById("icon");

searchBtn.addEventListener( "click" ,() => 
{
    const city = cityInput.value.trim();
    if(city === "")return;
    getweather(city);
});
async function getweather(city) {
    try{
       const response = await fetch(
       `${apiURL}?q=${city}&appid=${apiKey}&units=metric`);
           if(!response.ok) throw new Error("city not found");
           const data  = await response.json();

           cityName.textContent = data.name + "," + data.sys.country;
           temp.textContent = data.main.temp + "C";
           desc.textContent = data.weather[0].description;
           humidity.textContent = data.main.humidity + "%";
           wind.textContent = data.wind.speed + "km/h";
           icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    catch (error){
        alert(error.message);
    }
}