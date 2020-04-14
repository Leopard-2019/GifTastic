
// npm package
var path = require("path");

// ROUTING
module.exports = function (app) {

    // Block of Code handeling when users "visit" a page. 

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
}; 