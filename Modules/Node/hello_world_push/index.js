var request = require("request");
var express = require("express");
var app = express();

app.listen(3001, () => {
 console.log("Server running on port 3001");
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

    var data = ["[PUSH] Fred","[PUSH] Dimman","[PUSH] Vasse","[PUSH] Zunken","[PUSH] Cissi","[PUSH] Oscar", "[PUSH] Felicia"];
    var random = Math.floor(Math.random() * data.length);

    var moduleId = '4A17AD48-0FD3-4F01-A063-D7ECCA8C91A7';
    var url = 'http://localhost:5000/api/module/' + moduleId;

    var module = { id: moduleId, value: data[random]}

    request.put({url: url, body: module, json: true });

  }, 5 * 1000);
}

pushData();
