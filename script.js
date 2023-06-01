fetchWeather('madrid');
fetchWeather('oslo');
fetchWeather('angers');

function fetchWeather(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=168d9181df63606a05cb22cddcc68f85&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById(`${cityName}-weather`).innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
        document.getElementById(`${cityName}-temperature`).innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById(`${cityName}-pressure`).innerHTML = data.main.pressure + " hPa";
        document.getElementById(`${cityName}-wind`).innerHTML = data.wind.speed + " m/s";
        document.getElementById(`${cityName}-humidity`).innerHTML = data.main.humidity + " %";
  
        // Call fetchWeather() again after 30 minutes
        setTimeout(fetchWeather, 1800000);
    })
    .catch((error) => {
        console.log(error);
        alert("Something went wrong")
    });
}

let dateElement = document.getElementById("date");
let timeElement = document.getElementById("time");
 
function formatTime (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function formatDate (date) {
    let DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTH[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

//Updating every second
setInterval(() => {
    let now = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}, 1000);