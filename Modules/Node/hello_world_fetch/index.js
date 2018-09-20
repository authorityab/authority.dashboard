var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
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

app.get("/getData", (req, res, next) => {
  var data = ["[FETCH] Fred","[FETCH] Dimman","[FETCH] Vasse","[FETCH] Zunken","[FETCH] Cissi","[FETCH] Oscar", "[FETCH] Felicia"];

  var random = Math.floor(Math.random() * data.length);

 res.json(data[random]);
});
