const API_KEY = "0a13cf60a6c610c0a11bdaac967173d2"

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child")
            const weather = document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        })
}
function onGeoErr(){
    alert("위치를 불러올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)