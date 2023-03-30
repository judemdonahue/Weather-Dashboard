var dateEl = document.getElementById("date");
var tempEl = document.getElementById("temp")
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");

//5 DAY FORECAST API CALL

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=30.26&lon=-97.74&appid=561ba66c8fb7676c4035b87bda0066fb&units=imperial';

// GEOCODE API CALL

var geocode = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';


fetch(requestUrl)
  .then(response => response.json())
  .then(function (data) {
    var date = data.list[3].dt_txt
    var datecontent = JSON.parse(JSON.stringify(date).replace(/15:00:00/g, ''));
    var temp = data.list[3].main.temp
    var wind = data.list[3].wind.speed;
    var humidity = data.list[3].main.humidity; 
    console.log(data);
    console.log(date);
    console.log(temp);
    console.log(wind);
    console.log(humidity);
    dateEl.textContent = "Austin " + datecontent;
    tempEl.textContent = "Temp: " + temp + "ºF";
    windEl.textContent = "Wind: " + wind + "mph";
    humidityEl.textContent = "Humidity: " + humidity + "%";
  });