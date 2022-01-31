//THIS IS FOR THE VALUE OF THE INPUT
var input = document.getElementById("cityname");
// THIS IF FOR THE BUTTON THAT SUBMITS CITY IN INPUT FIELD
var submitButton = document.querySelector("#submit-button");
// BELOW IS THE PLACE WHERE I WANT DATA TO GO
var displayEl = document.querySelector("#city-search-term")

// additional city WILL EVENTUALLY GO HERE

// var cityInputEl = document.querySelector("#cityname");

// var citySearchTerm = document.querySelector("#city-search-term");

// THIS IS FOR GENERATING TODAY'S DATE WITH MOMENT
var todaysDate = moment().format('ddd, MMM D');
console.log(todaysDate);

// var submitHandler = function (event) {
//     // prevent page from refreshing
//     event.preventDefault();

//     // get value from input element
//     var cityname = cityInputEl.value.trim();

//     if (cityname) {
//         getCityWeather(cityname);

//         //clear old content
//         displayEl.value='';
//         cityInputEl='';
//     } else {
//         alert("Please enter a city");
//     }
// };

// a var buttonClickHandler will go here for additional cities

submitButton.addEventListener("click", function (event) {
    event.preventDefault;
    var cityName = input.value + ",ca";  
    
    fetch("https://aerisweather1.p.rapidapi.com/observations/" + cityName, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "aerisweather1.p.rapidapi.com",
		"x-rapidapi-key": "7e6d048806msh30042c9dabdee72p11ce63jsn26e26f5e4a8b"
	}
})
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            var observationsIcon = data.response.ob.icon;
            var observations = data.response.ob.tempC;
            var observations1 = data.response.ob.windchillC;
            var observations2 = data.response.ob.windMPH;
            var observations3 = data.response.ob.humidity;
            console.log(data);
            console.log(observations);

                var img = document.createElement('img');
                var date = document.createElement('h4');
                var h2 = document.createElement('h2');
                var p = document.createElement('p');
                var p2 = document.createElement('p');
                var p3 = document.createElement('p');
                var p4 = document.createElement('p');
                var p5 = document.createElement('p');

                newCityName = cityName.replace(',ca', '');

                img.src = observationsIcon.href;
                date.textContent = todaysDate;
                h2.textContent = newCityName;
                p.textContent = "";
                p2.textContent = "Temp: " + observations + " c";
                p3.textContent = "Windchill: " + observations1 + " c";
                p4.textContent = "Wind: " + observations2 + " MPH";
                p5.textContent = "Humidity: " + observations3 + " %rh";

                displayEl.innerHTML = "";
                displayEl.appendChild(img);
                displayEl.appendChild(date);
                displayEl.appendChild(h2);
                displayEl.appendChild(p);
                displayEl.appendChild(p2);
                displayEl.appendChild(p3);
                displayEl.appendChild(p4);
                displayEl.appendChild(p5);
        });
    })

// a getFeaturedCity function will go here for additional cities

// displayWeather in cards for 5 day forecast function will go here

// additional cities event listener goes here