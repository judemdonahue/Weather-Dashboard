
//var userSearch = document.getElementById("userInput");
var day1 = [$('#date1'), $('#temp1'), $('#wind1'), $('#humidity1')];
var day2 = [$('#date2'), $('#temp2'), $('#wind2'), $('#humidity2')];
var day3 = [$('#date3'), $('#temp3'), $('#wind3'), $('#humidity3')];
var day4 = [$('#date4'), $('#temp4'), $('#wind4'), $('#humidity4')];
var day5 = [$('#date5'), $('#temp5'), $('#wind5'), $('#humidity5')];
var day6 = [$('#date6'), $('#temp6'), $('#wind6'), $('#humidity6')];

var day1Img = $("#img1");
var day2Img = $("#img2");
var day3Img = $("#img3");
var day4Img = $("#img4");
var day5Img = $("#img5");
var day6Img = $("#img6");

var searchBtn = $("#searchBtn");
//var userSearch = $("#userInput").val.trim;
var userSearch = "austin "

console.log(userSearch);

//5 DAY FORECAST API CALL
var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&appid=561ba66c8fb7676c4035b87bda0066fb&units=imperial`;

// GEOCODE API CALL
//var geocode = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';



fetch(requestUrl)
  .then(response => response.json())
  .then(function (data) {

    //Pulls data and removes dynamic times from date string
    var date = data.list[0].dt_txt
    var dateTrim = date.substring(0, date.length-8);

    var temp = data.list[0].main.temp
    var wind = data.list[0].wind.speed;
    var humidity = data.list[0].main.humidity; 

    console.log(data);
    console.log(dateTrim);
    console.log(temp);
    console.log(wind);
    console.log(humidity);

    //inputs fetch request info into DOM 
    day1[0].text(userSearch.toUpperCase() + (data.list[0].dt_txt.slice(0, -8)));
    day1[1].text("Temp: " + (data.list[0].main.temp) + "ºF");
    day1[2].text("Wind: " + (data.list[0].wind.speed) + " mph");
    day1[3].text("Humidity: " + (data.list[0].main.humidity) + "%");
    var day1Icon = data.list[0].weather[0].icon;
    day1Img[0].src = `https://openweathermap.org/img/w/${day1Icon}.png`;

    day2[0].text(data.list[5].dt_txt.slice(0, -8));
    day2[1].text("Temp: " + (data.list[5].main.temp) + "ºF");
    day2[2].text("Wind: " + (data.list[5].wind.speed) + " mph");
    day2[3].text("Humidity: " + (data.list[5].main.humidity) + "%");
    var day2Icon = data.list[5].weather[0].icon;
    day2Img[0].src = `https://openweathermap.org/img/w/${day2Icon}.png`;

    day3[0].text(data.list[13].dt_txt.slice(0, -8));
    day3[1].text("Temp: " + (data.list[13].main.temp) + "ºF");
    day3[2].text("Wind: " + (data.list[13].wind.speed) + " mph");
    day3[3].text("Humidity: " + (data.list[13].main.humidity) + "%");
    var day3Icon = data.list[13].weather[0].icon;
    day3Img[0].src = `https://openweathermap.org/img/w/${day3Icon}.png`;

    day4[0].text(data.list[21].dt_txt.slice(0, -8));
    day4[1].text("Temp: " + (data.list[21].main.temp) + "ºF");
    day4[2].text("Wind: " + (data.list[21].wind.speed) + " mph");
    day4[3].text("Humidity: " + (data.list[21].main.humidity) + "%");
    var day4Icon = data.list[21].weather[0].icon;
    day4Img[0].src = `https://openweathermap.org/img/w/${day4Icon}.png`;

    day5[0].text(data.list[29].dt_txt.slice(0, -8));
    day5[1].text("Temp: " + (data.list[29].main.temp) + "ºF");
    day5[2].text("Wind: " + (data.list[29].wind.speed) + " mph");
    day5[3].text("Humidity: " + (data.list[29].main.humidity) + "%");
    var day5Icon = data.list[29].weather[0].icon;
    day5Img[0].src = `https://openweathermap.org/img/w/${day5Icon}.png`;

    day6[0].text(data.list[37].dt_txt.slice(0, -8));
    day6[1].text("Temp: " + (data.list[37].main.temp) + "ºF");
    day6[2].text("Wind: " + (data.list[37].wind.speed) + " mph");
    day6[3].text("Humidity: " + (data.list[37].main.humidity) + "%");
    var day6Icon = data.list[37].weather[0].icon;
    day6Img[0].src = `https://openweathermap.org/img/w/${day6Icon}.png`;
  });


function searchItem () {
    $("#searchBtn").on("click", function (event) {

        event.preventDefault();
    
        var userSearch = $("#userInput").val().trim();
    
        if (city === "") {
            return;
        };
    });
}
  