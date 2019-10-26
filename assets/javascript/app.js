$(document).ready(function () {
    // Initial array of animals

    let topics = ["lion", "tiger", "gorila", "leopard", "elefant", "giraffe", "koala"];

    // variable that define the number of gift to be initially displayed

    let a1 = 10;


    // Function for displaying animals's buttons

    function addButtons() {

        // Deleting the animals buttons prior to adding new animals buttons
        // (this is necessary otherwise we will have repeat buttons)

        $("#buttons-view").empty();

        // Looping through the array of animals 

        for (let i = 0; i < topics.length; i++) {

            // Then dynamicaly generating buttons for each animals  in the array.

            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)

            let a = $("<button>");

            // Adding a data-class

            a.addClass("animal");

            // Adding a data-attribute

            a.attr("data-animal", topics[i]);

            // Providing the button's text with a value of the animals at index i

            a.text(topics[i]);

            // Adding the button to the HTML

            $("#buttons-view").append(a);
        }
    }

    // This function handles events where one button is clicked

    $("#add-animal").on("click", function (event) {

        // event.preventDefault() prevents the form from trying to submit itself.

        event.preventDefault();

        // This line will grab the text from the input box

        let animals1 = $("#animal-input").val().trim();

        // The animals from the textbox is then added to our array

        topics.push(animals1);

        // calling addButtons which handles the processing of our movie array
        addButtons();
    });

    // Calling the addButtons function at least once to display the initial list of animals

    addButtons();

    // function named "engine" that basically perform the AJAX request, contructs the queryURL

    $(document).on("click", ".animal", function engine() {

        // Grabbing and storing the data-animal property value from the button

        let animals2 = $(this).attr("data-animal");


        // Performing an AJAX request with the queryURL
        // Constructing a queryURL using the animal name

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animals2 + "&api_key=42AnQTx6o2pFP9hsR2BUpy0AcHLw4UEE&limit=" + a1;


        // Performing an AJAX request with the queryURL, and creates the 10 gifts as requested by the user everytime that click 
        // on one of the button which animal name.

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request

            .then(function (response) {
                console.log(queryURL);

                console.log(response);

                // storing the data from the AJAX request in the results variable

                var results = response.data;

                // Looping through each result item

                for (var i = 0; i < results.length; i++) {

                    // Creating and storing a div tag

                    var animalDiv = $("<div>");

                    // Creating a paragraph tag with the result item's rating, title and source.

                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var p1 = $("<p>").text("Title: " + results[i].title);
                    var p2 = $("<p>").text("Source: " + results[i].source);

                    // Creating and storing an image tag

                    var animalImage = $("<img>");

                    // Setting the src attributes and class of the image to a property pulled off the result item

                    let animated = results[i].images.fixed_height.url;
                    let static = results[i].images.fixed_height_still.url;

                    animalImage.attr("src", static);
                    animalImage.addClass("kinematic");
                    animalImage.attr("state", "static");
                    animalImage.attr("static-s", static);
                    animalImage.attr("animate-s", animated);

                    // Appending the paragraphs and image tag to the animalDiv

                    animalDiv.append(p, p1, p2);
                    animalDiv.append(animalImage);

                    // Prependng the animalDiv to the HTML page in the "#images" div

                    $("#images").prepend(animalDiv);
                }
            });


    });

    //Click event on gifs with class of "kinematic" executes sDynamic function 

    $(document).on("click", ".kinematic", sDynamic);

    //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-static"

    function sDynamic() {
        var state = $(this).attr("state");
        if (state === "static") {
            $(this).attr("src", $(this).attr("animate-s"));
            $(this).attr("state", "animate");
        } else {
            $(this).attr("src", $(this).attr("static-s"));
            $(this).attr("state", "static");
        }
    };

    //Function  to re-start the app.

    $('#str1').on('click', function rStart() {
        window.location.reload(false);
    });

});
