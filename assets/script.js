$("#info-container").hide()
$("#forecast-container").hide()

cityNamesArray = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
 
$("#userInput").autocomplete({
  source: function(request, response) {
      var results = $.ui.autocomplete.filter(cityNamesArray, request.term);
      response(results.slice(0, 10));
  }
});

let recentSearchesArray = JSON.parse(localStorage.getItem("recentCitiesTable"));
if (recentSearchesArray === null) {
  recentSearchesArray = [];
}

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
var search = $("#userInput")

//var userSearch = $("#userInput").val.trim;

searchBtn.click(function () {
  $("#info-container").show()
  $("#forecast-container").show()

  var search = $("#userInput").val() + " ";
  console.log(search);

  var userSearch = search
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&appid=561ba66c8fb7676c4035b87bda0066fb&units=imperial`;

  recentSearchesArray.push({city:$("#userInput").val()});
  localStorage.setItem("recentCitiesTable", JSON.stringify(recentSearchesArray));
  console.log("LocalStorage")
  searchHistory()

//5 DAY FORECAST API CALL
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
    day1[0].text(userSearch.charAt(0).toUpperCase() + userSearch.slice(1) + (data.list[0].dt_txt.slice(0, -8)));
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
})

function searchHistory() {
  var recentSearchesArray = JSON.parse(localStorage.getItem("recentCitiesTable"));
  $(".btn-container").empty();

  for (i = 0; i < recentSearchesArray.length; i++) {
    var appendBlock = `<button type="button" class="btn btn-secondary my-2 col-12"> ${recentSearchesArray[i].city} </button>`;
    $(".btn-container").append(appendBlock);
  }
};
searchHistory()















// GEOCODE API CALL
//var geocode = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';



