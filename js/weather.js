const API_KEY = "d0460677d7e8ae7f618c806bf0fd7751"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const city = document.querySelector('.weather .weather__city');
            const weather = document.querySelector('.weather .weather__temp');
            
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
            
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);