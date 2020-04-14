Assignment: Node and Express Servers - FriendFinder

Compatibility-based "FriendFinder" application 


Live App:
The app can be accessed live by clicking this link: https://desolate-springs-10066.herokuapp.com/

Overview:

In this activity, A compatibility-based "FriendFinder" application -- basically a friend finder has been built. This full-stack site takes in results your users' surveys, then compare their answers with those from other users. The app displays the name and picture of the user with the best overall match.

Express is used  to handle routing. Also, the app has been deployedin  Heroku so other users can fill it out.

Instructions:

The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The server.js file requires the basic npm packages: express, body-parser and path.

The htmlRoutes.js file includes one routes:

A GET Route to /survey which displays the survey page.

The apiRoutes.js file contains two routes:

A GET route with the url /api/friends. This is used to display a JSON of all possible friends.

A POST routes /api/friends. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic.

Data is saved in the app as an array of objects. Each of these objects follows the format below.

{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
The app determines the user's most compatible friend using the following:

Converts each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

Then it compares the difference between current user's scores against those from other users, question by question. Adds up the differences to calculate the totalDifference.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

Using the absolute value of the differences. Put another way: no negative solutions! App calculates both 5-3 and 3-5 as 2, and so on.

The closest is the user with the least amount of difference.

Once the current user's most compatible friend is found, it displays the result as a modal pop-up.

The modal displays both the name and picture of the best match.
