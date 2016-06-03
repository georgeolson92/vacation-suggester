$(document).ready(function(){
  $("form#vacation").submit(function(event){
    var name = $("input#name").val();
    var beverage = $("select#beverage").val();
    var temp = $("select#temp").val();
    var activity = $("select#activity").val();
    var music = $("select#music").val();
    var money = $("select#money").val();

    var iceland = "Iceland";
    var ibiza = "Ibiza";
    var vienna = "Vienna, Austria";
    var norway = "Norway";
    var stpetersburg = "St. Petersburg, Russia";
    var berlin = "Berlin, Germany";
    var florence = "Florence, Italy";

    window.scrollTo(0, 0);
    $(".desc").hide();
    $(".has-error").removeClass("has-error");
    $(".formalert").remove();

    if ( name === "" ) {
      $(".name-form-group").addClass("has-error");
      $(".name-form-group").append("<span class='formalert'>Please enter name.</span>");
    } else if (name !== "") {
      $("form#vacation").fadeOut();
      $("#result").fadeIn();
    }

    if (activity === "woods" && temp !== "hot"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "party" && temp === "hot"){
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (activity === "party" &&  music === "no"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "party" && temp !== "hot"){
      $(".location").text(berlin);
      $("#berlin-desc").show();
    } else if (activity === "springs" && temp !== "hot"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (activity === "springs" && music === "ic"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (activity === "party" && music === "ib"){
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (activity === "woods" && music === "no"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "opera" && music === "vi"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (activity === "history" && temp === "hot"){
      $(".location").text(florence);
      $("#florence-desc").show();
    } else if (activity === "history" && temp !== "hot"){
      $(".location").text(stpetersburg);
      $("#stpetersburg-desc").show();
    } else if (activity === "history" && music === "vi"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (temp !== "hot" && beverage === "vodka"){
      $(".location").text(stpetersburg);
      $("#stpetersburg-desc").show();
    } else if (temp !== "hot" && beverage === "water"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (temp === "hot" && beverage === "strong"){
      $(".location").text(florence);
      $("#florence-desc").show();
    } else if (activity === "opera"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (activity === "party"){
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (activity === "history"){
      $(".location").text(stpetersburg);
      $("#stpetersburg-desc").show();
    } else if (activity === "woods" && temp === "hot"){
      $(".location").text(florence);
      $("#florence-desc").show();
    } else if (activity === "woods" && temp !== "hot"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "springs" && temp !== "hot"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (beverage === "vodka" && temp === "hot") {
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (beverage === "vodka"){
      $(".location").text(stpetersburg);
      $("#stpetersburg-desc").show();
    } else if (beverage === "fancy" && temp === "hot"){
      $(".location").text(florence);
      $("#florence-desc").show();
    } else if (beverage === "fancy" && temp !== "hot"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (beverage === "strong" && temp !== "hot"){
      $(".location").text(stpetersburg);
      $("#stpetersburg-desc").show();
    } else if (beverage === "strong"){
      $(".location").text(florence);
      $("#florence-desc").show();
    } else if (beverage === "beer" && temp === "hot") {
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (beverage === "beer"){
      $(".location").text(berlin);
      $("#berlin-desc").show();
    } else if (beverage === "water" && temp !== "hot"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (music === "ib" && temp === "hot"){
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (music === "ib" && temp !== "hot"){
      $(".location").text(berlin);
      $("#berlin-desc").show();
    } else if (music === "no"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (music === "ic"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (music === "vi"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (temp === "cool"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (temp === "mid"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (temp === "hot"){
      $(".location").text(florence);
      $("#florence-desc").show();
    } else {
      $(".location").text("somewhere");
    }

    if (money === "rich"){
      $(".hotel").text("The Grand Fancypants Hotel");
      $(".stars").text("Price range: $$$$$$$$$$$$$");
      $(".img-hotel").attr("src", "img/fancyhotel.jpg");
      $(".hotel-desc").text("Includes free limousine service, fine dining, in-room champagne bar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac laoreet turpis. Integer malesuada pretium lorem nec tempor. Fusce at convallis tortor, eu bibendum nisi. Nunc vestibulum, tellus pellentesque tempus molestie, urna risus rhoncus arcu, sed aliquet dolor nibh sed mauris. In iaculis blandit dignissim. Vestibulum hendrerit ligula vel sagittis eleifend. Morbi ac purus rutrum, feugiat ex ut, maximus magna. Praesent non tortor vitae nisi laoreet lacinia. Aenean accumsan ac quam et gravida.");
    } else if (money === "mid"){
      $(".hotel").text("Decent Budget Hotel/Guesthouse");
      $(".stars").text("Price range: $$$");
      $(".img-hotel").attr("src", "img/budget.jpg");
      $(".hotel-desc").text("A nice, centrally-located hotel you can relax in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac laoreet turpis. Integer malesuada pretium lorem nec tempor. Fusce at convallis tortor, eu bibendum nisi. Nunc vestibulum, tellus pellentesque tempus molestie, urna risus rhoncus arcu, sed aliquet dolor nibh sed mauris. In iaculis blandit dignissim. Vestibulum hendrerit ligula vel sagittis eleifend. Morbi ac purus rutrum, feugiat ex ut, maximus magna. Praesent non tortor vitae nisi laoreet lacinia. Aenean accumsan ac quam et gravida.");
    } else if (money === "poor"){
      $(".hotel").text("Cheap Hostel");
      $(".stars").text("Price range: $");
      $(".img-hotel").attr("src", "img/hostel.png");
      $(".hotel-desc").text("You'll be sleeping around tons of other people but hey, at least it's cheap, dude. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac laoreet turpis. Integer malesuada pretium lorem nec tempor. Fusce at convallis tortor, eu bibendum nisi. Nunc vestibulum, tellus pellentesque tempus molestie, urna risus rhoncus arcu, sed aliquet dolor nibh sed mauris. In iaculis blandit dignissim. Vestibulum hendrerit ligula vel sagittis eleifend. Morbi ac purus rutrum, feugiat ex ut, maximus magna. Praesent non tortor vitae nisi laoreet lacinia. Aenean accumsan ac quam et gravida.");
    } else {
      $(".hotel").text("somewhere");
    }

    $(".name").text(name);

    event.preventDefault();
  });

  $(".returnto").click(function(){
    $("#result").fadeOut();
    $("form#vacation").fadeIn();
    window.scrollTo(0, 0);
  });
});
