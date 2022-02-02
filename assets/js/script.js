//THIS IS FOR THE VALUE OF THE INPUT
var input = document.getElementById("cityname");
// THIS IF FOR THE BUTTON THAT SUBMITS CITY IN INPUT FIELD
var submitButton = document.querySelector("#submit-button");
// BELOW IS THE PLACE WHERE I WANT DATA TO GO
var displayEl = document.querySelector("#city-search-term")
var cardDisplay1 = document.querySelector("#card-1");
var cardDisplay2 = document.querySelector("#card-2");
var cardDisplay3 = document.querySelector("#card-3");
var cardDisplay4 = document.querySelector("#card-4");
var cardDisplay5 = document.querySelector("#card-5");

var cityButtonsEl = document.querySelector("#city-buttons");


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
            console.log("this is the icon", data.response.ob.icon);

                var img = document.createElement('img');
                var date = document.createElement('h4');
                var h2 = document.createElement('h2');
                var p = document.createElement('p');
                var p2 = document.createElement('p');
                var p3 = document.createElement('p');
                var p4 = document.createElement('p');
                var p5 = document.createElement('p');

                newCityName = cityName.replace(',ca', '');

                img.textContent = observationsIcon;
                date.textContent = todaysDate;
                h2.textContent = newCityName;
                p.textContent = "";
                p2.textContent = "Temp: " + observations + "c";
                p3.textContent = "Windchill: " + observations1 + "c";
                p4.textContent = "Wind: " + observations2 + "MPH";
                p5.textContent = "Humidity: " + observations3 + "%rh";

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

// var getFeaturedCities = function (city) {

//     var featuredCityName = city + ",ca";  
    
//     fetch("https://aerisweather1.p.rapidapi.com/observations/" + featuredCityName, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "aerisweather1.p.rapidapi.com",
// 		"x-rapidapi-key": "7e6d048806msh30042c9dabdee72p11ce63jsn26e26f5e4a8b"
// 	}
// })
//         .then(function(response) {
//             return response.json(); 
//         })
//         .then(function(data) {
//             var observationsIcon = data.response.ob.icon;
//             var observations = data.response.ob.tempC;
//             var observations1 = data.response.ob.windchillC;
//             var observations2 = data.response.ob.windMPH;
//             var observations3 = data.response.ob.humidity;
//             console.log(data);
//             console.log(observations);
//             console.log("this is the icon", data.response.ob.icon);

//                 var img = document.createElement('img');
//                 var date = document.createElement('h4');
//                 var h2 = document.createElement('h2');
//                 var p = document.createElement('p');
//                 var p2 = document.createElement('p');
//                 var p3 = document.createElement('p');
//                 var p4 = document.createElement('p');
//                 var p5 = document.createElement('p');

//                 newCityName = cityName.replace(',ca', '');

//                 img.textContent = observationsIcon;
//                 date.textContent = todaysDate;
//                 h2.textContent = newCityName;
//                 p.textContent = "";
//                 p2.textContent = "Temp: " + observations + "c";
//                 p3.textContent = "Windchill: " + observations1 + "c";
//                 p4.textContent = "Wind: " + observations2 + "MPH";
//                 p5.textContent = "Humidity: " + observations3 + "%rh";

//                 displayEl.innerHTML = "";
//                 displayEl.appendChild(img);
//                 displayEl.appendChild(date);
//                 displayEl.appendChild(h2);
//                 displayEl.appendChild(p);
//                 displayEl.appendChild(p2);
//                 displayEl.appendChild(p3);
//                 displayEl.appendChild(p4);
//                 displayEl.appendChild(p5);
//         });

// // button click handler for taking value of additional city button and sending it to main function
// var buttonClickHandler = function (event) {
//     // get city from cliked element
//     var city = event.target.getAttribute("data-id")
//     if(city) {
//         getFeaturedCity(city);

//         // clear old content
//         displayEl.textContent = "";
//         cardDisplay1.textContent = "";
//         cardDisplay2.textContent = "";
//         cardDisplay3.textContent = "";
//         cardDisplay4.textContent = "";
//         cardDisplay5.textContent = "";
//     }
// };

// displayWeather in cards for 5 day forecast function will go here

submitButton.addEventListener("click", function (event) {
    event.preventDefault;
    var cityName = input.value + ",ca"; 
    
    fetch("https://aerisweather1.p.rapidapi.com/forecasts/" + cityName, {
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

            // FOR 1ST FORECAST CARD
            var forecasts = data.response[0].periods[0].avgTempC;
            var forecasts1 = data.response[0].periods[0].windSpeedMPH;
            var forecasts2 = data.response[0].periods[0].humidity;
            console.log(data);

            var p = document.createElement('p');
            var pSpace = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');

            p.textContent = "Temp: " + forecasts + "c";
            pSpace.textContent = "";
            p2.textContent = "Wind: " + forecasts1 + "MPH";
            pSpace.textContent = "";
            p3.textContent = "Humidity: " + forecasts2 + "%rh";


            cardDisplay1.innerHTML = "";
            cardDisplay1.appendChild(p);
            cardDisplay1.appendChild(pSpace);
            cardDisplay1.appendChild(p2);
            cardDisplay1.appendChild(pSpace);
            cardDisplay1.appendChild(p3);

            // FOR 2nd FORECAST CARD
            var forecasts = data.response[0].periods[1].avgTempC;
            var forecasts1 = data.response[0].periods[1].windSpeedMPH;
            var forecasts2 = data.response[0].periods[1].humidity;
            console.log(data);

            var p = document.createElement('p');
            var pSpace = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');

            p.textContent = "Temp: " + forecasts + "c";
            pSpace.textContent = "";
            p2.textContent = "Wind: " + forecasts1 + "MPH";
            pSpace.textContent = "";
            p3.textContent = "Humidity: " + forecasts2 + "%rh";


            cardDisplay2.innerHTML = "";
            cardDisplay2.appendChild(p);
            cardDisplay2.appendChild(pSpace);
            cardDisplay2.appendChild(p2);
            cardDisplay2.appendChild(pSpace);
            cardDisplay2.appendChild(p3);

            // For 3rd FORECAST CARD
            var forecasts = data.response[0].periods[2].avgTempC;
            var forecasts1 = data.response[0].periods[2].windSpeedMPH;
            var forecasts2 = data.response[0].periods[2].humidity;
            console.log(data);
            var p = document.createElement('p');
            var pSpace = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');

            p.textContent = "Temp: " + forecasts + "c";
            pSpace.textContent = "";
            p2.textContent = "Wind: " + forecasts1 + "MPH";
            pSpace.textContent = "";
            p3.textContent = "Humidity: " + forecasts2 + "%rh";


            cardDisplay3.innerHTML = "";
            cardDisplay3.appendChild(p);
            cardDisplay3.appendChild(pSpace);
            cardDisplay3.appendChild(p2);
            cardDisplay3.appendChild(pSpace);
            cardDisplay3.appendChild(p3);

            // For 4th FORECAST CARD
            var forecasts = data.response[0].periods[3].avgTempC;
            var forecasts1 = data.response[0].periods[3].windSpeedMPH;
            var forecasts2 = data.response[0].periods[3].humidity;
            console.log(data);
            var p = document.createElement('p');
            var pSpace = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');

            p.textContent = "Temp: " + forecasts + "c";
            pSpace.textContent = "";
            p2.textContent = "Wind: " + forecasts1 + "MPH";
            pSpace.textContent = "";
            p3.textContent = "Humidity: " + forecasts2 + "%rh";


            cardDisplay4.innerHTML = "";
            cardDisplay4.appendChild(p);
            cardDisplay4.appendChild(pSpace);
            cardDisplay4.appendChild(p2);
            cardDisplay4.appendChild(pSpace);
            cardDisplay4.appendChild(p3);

            // For 5th FORECAST CARD
            var forecasts = data.response[0].periods[4].avgTempC;
            var forecasts1 = data.response[0].periods[4].windSpeedMPH;
            var forecasts2 = data.response[0].periods[4].humidity;
            console.log(data);
            var p = document.createElement('p');
            var pSpace = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');

            p.textContent = "Temp: " + forecasts + "c";
            pSpace.textContent = "";
            p2.textContent = "Wind: " + forecasts1 + "MPH";
            pSpace.textContent = "";
            p3.textContent = "Humidity: " + forecasts2 + "%rh";


            cardDisplay5.innerHTML = "";
            cardDisplay5.appendChild(p);
            cardDisplay5.appendChild(pSpace);
            cardDisplay5.appendChild(p2);
            cardDisplay5.appendChild(pSpace);
            cardDisplay5.appendChild(p3);

 
        });
    })


        

// // additional cities event listener goes here
// cityButtonsEl.addEventListener("click", buttonClickHandler);