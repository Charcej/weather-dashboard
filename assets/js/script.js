// THIS IF FOR THE BUTTON THAT SUBMITS CITY IN INPUT FIELD
var submitButton = document.querySelector("#submit-button");

// additional city WILL EVENTUALLY GO HERE

// var cityInputEl = document.querySelector("#cityname");

// BELOW IS THE PLACE WHERE I WANT DATA TO GO
var displayEl = document.querySelector("#display-panel")

// var citySearchTerm = document.querySelector("#city-search-term");


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


function getApi() {

    var cityName = "toronto,ca"
    
    fetch("https://aerisweather1.p.rapidapi.com/sunmoon/" + cityName, {
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
            console.log(data);
            
            for (var i = 0; i <data.length; i++) {

                console.log(data[i]);
            }
        });
    }



// a getFeaturedCity function will go here for additional cities

// displayWeather function will go here


// submitButton.addEventListener("submit", getApi);
// additional cities event listener goes here

getApi();