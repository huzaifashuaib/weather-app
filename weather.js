
async function ApiCall(cityName) {
    let callApi = await fetch(`http://api.weatherapi.com/v1/current.json?key=fa6cfe9e52024f3a8c273144240805&q=${cityName}&aqi=no`);
    let data = await callApi.json()
    return data
}

async function checkWeatherObject() {
    let getTxt = document.getElementById("getTxt");
    if (getTxt.value == "") {
        getTxt.focus()
        document.getElementById("weather-detail").style.display = 'none'
    }
    else {
        let weatherIcon = document.getElementById("weatherIcon")
        let temp = document.getElementById("temp")
        let city = document.getElementById("city")
        let humdity = document.getElementById("humdity")
        let pressure = document.getElementById("pressure")
        let getTxt = document.getElementById("getTxt").value;

        let getWeather = await ApiCall(getTxt)
        let { location, current } = getWeather;
        if (getWeather && Location && current) {

            weatherIcon.src = current.condition.icon
            city.innerText = location.name;
            temp.innerHTML = current.temp_c + "<span><sup>°</sup>C</span>";
            pressure.innerText = current.wind_kph;
            humdity.innerText = current.humidity;
            document.getElementById("weather-detail").style.display = 'block'
        }
        else {
            alert("Invaild City")
            document.getElementById("getTxt").value = ""

        }




    }

}

