
// npm packages 
var path = require("path");

// Data source holding the arrays of information.
var friendData = require("../data/friend.js");

// ROUTING
module.exports = function (app) {

    // API GET Request. This code handles when users "visit" a page.

    app.get("/api/friendList", function (req, res) {
        res.json(friendData);
    });

    // API POST Request. This code handles when a user submits the survey.

    app.post("/api/friendList", function (req, res) {

        var targetDifference = 40;

        var bestMatch;

        friendData.forEach(function (storedUserObject) {

            var difference = 0;

            for (i = 0; i < storedUserObject.scores.length; i++) {

                difference += Math.abs(storedUserObject.scores[i] - req.body.scores[i]);
            }

            if (difference < targetDifference) {

                targetDifference = difference;

                bestMatch = storedUserObject;

            } 
        }); 

        friendData.push(req.body);

        res.json(bestMatch);


    }); 
}; 
