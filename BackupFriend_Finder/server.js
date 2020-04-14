
// npm packages 

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//This tells node that we are creating an "express" server.
var app = express();

//This sets the initial port. 
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Uses any static files required by the html files.
app.use(express.static('app/public/'));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function () {
    console.log("From server.js File: App listening on PORT: " + PORT + "\n");
});