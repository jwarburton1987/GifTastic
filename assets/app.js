
//var carShopPresets = ["ferrari",  "lamborghini", "porsche", "audi", "bmw", "mercedes"]










$("#addCar").on("click", function (e) {
  console.log("click");
  e.preventDefault();
  var carSelection = $("#car-input").val();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + carSelection + "&api_key=2mIQwmA53EHMI0W739OOdqAVyPz2H6xD&limit=10&offset=0&lang=en"
    ;



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);

    clearScreen();

    for (i = 0; i < 10; i++) {
      var img = $("<img>").attr("src", response.data[i].images.original.url);
      //img.attr("src",response.data[0].url);


      $("#cars").append(img);




    }


    //$("#car-shop").append("<button>" + carSelection);
    var btn = $("<button>");
    var searchQuery = carSelection



    btn.text(carSelection);
    btn.on("click", function () {
      $(this).text();
      console.log($(this).text());
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).text() + "&api_key=2mIQwmA53EHMI0W739OOdqAVyPz2H6xD&limit=10&offset=0&lang=en"
      ;
      clearScreen();

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        for (i = 0; i < 10; i++) {
          var img = $("<img>").attr("src", response.data[i].images.original.url);
          //img.attr("src",response.data[0].url);
    
    
          $("#cars").append(img);
    
    
    
    
        }
          


        

      });



    }
    );

    $("#car-shop").append(btn)








  });
});


function clearScreen() {
  $("#cars").empty();

};