var request = require("request");
var express = require("express");
var Giphy = require('giphy');
var app = express();

app.listen(3004, () => {
 console.log("Server running on port 3004");
});

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

function pushData() {
    var interval = setInterval(function() {
		var request = require('request');
		request('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&appid=dcb8a3f7b9913d929f9363d33201013e&units=metric', function (error, response, body) {
			var result = JSON.parse(body);
			
			var fc0 = result.list[0];
			var fc1 = result.list[1];
			var fc2 = result.list[2];
			var fc3 = result.list[3];
			var fc4 = result.list[4];
			var fc5 = result.list[5];
			var fc6 = result.list[6];
			var fc7 = result.list[7];
			var fc8 = result.list[8];
			
			var forecast = "City :" + result.city.name + " (" + result.city.id +") | Forecast => ______________" +
			"\n\n [0] " + fc0.dt_txt + " Temp: " + Math.trunc(fc0.main.temp).toString() + " Decription: " + fc0.weather[0].main +
			"\n\n [1] " + fc1.dt_txt + " Temp: " + Math.trunc(fc1.main.temp).toString() + " Decription: " + fc1.weather[0].main +
			"\n\n [2] " + fc2.dt_txt + " Temp: " + Math.trunc(fc2.main.temp).toString() + " Decription: " + fc2.weather[0].main +
			"\n\n [3] " + fc3.dt_txt + " Temp: " + Math.trunc(fc3.main.temp).toString() + " Decription: " + fc3.weather[0].main +
			"\n\n [4] " + fc4.dt_txt + " Temp: " + Math.trunc(fc4.main.temp).toString() + " Decription: " + fc4.weather[0].main +
			"\n\n [5] " + fc5.dt_txt + " Temp: " + Math.trunc(fc5.main.temp).toString() + " Decription: " + fc5.weather[0].main +
			"\n\n [6] " + fc6.dt_txt + " Temp: " + Math.trunc(fc6.main.temp).toString() + " Decription: " + fc6.weather[0].main +
			"\n\n [7] " + fc7.dt_txt + " Temp: " + Math.trunc(fc7.main.temp).toString() + " Decription: " + fc7.weather[0].main +
			"\n\n [8] " + fc8.dt_txt + " Temp: " + Math.trunc(fc8.main.temp).toString() + " Decription: " + fc8.weather[0].main +
			"";
			
			callComplete(forecast);
		});
		
  }, 5 * 1000);
}

function callComplete(img) {
  var moduleId = 'aec2d003-e756-47d6-bf09-904e39e4a66b';
  var url = 'http://localhost:5000/api/module/' + moduleId;

  var module = { id: moduleId, value: img}

  request.put({url: url, body: module, json: true });
}

pushData();
