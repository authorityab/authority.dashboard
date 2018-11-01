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

    var data = ["Fred","Dimman","Vasse","Zunken","Cissi","Oscar", "Felicia"];
    var random = Math.floor(Math.random() * data.length);

    var giphy = new Giphy('lPOTyab0KsIIWTVrgp7c2fqpZujzNPNx');

    giphy.search({ q: data[random] }, function(err, data, res) {
      if (data.data.length > 0) {
        var length = data.data.length;
        var rand = Math.floor(Math.random() * length)
        var item = data.data[rand];
        console.log(item.images.original);
        giphyComplete(item.images.original.url);

      } else {
        giphyComplete(data[random]);
      }
    });



  }, 5 * 1000);
}

function giphyComplete(img) {
  var moduleId = 'c7041543-7497-47d4-a1af-3894568ea23a';
  var url = 'http://localhost:5000/api/module/' + moduleId;

  var module = { id: moduleId, value: img}

  request.put({url: url, body: module, json: true });
}

pushData();
