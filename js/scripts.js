$(document).ready(function(){
  $("form#vacation").submit(function(event){
    var name = $("input#name").val();
    var color = $("select#color").val();
    var temp = $("select#temp").val();
    var activity = $("select#activity").val();
    var music = $("select#music").val();
    var money = $("select#money").val();

    var iceland = "Iceland";
    var ibiza = "Ibiza";
    var vienna = "Vienna, Austria";
    var norway = "Norway";
    var istanbul = "Istanbul, Turkey";
    var stpetersburg = "St. Petersburg, Russia";

    $(".desc").hide();

    console.log(name, color, temp, activity, music, money);

    if (activity === "woods" && temp === "no"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "party" && temp === "hot"){
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (activity === "springs" && temp === "cool"){
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
      $(".location").text(istanbul);
      $("#istanbul-desc").show();
    } else if (activity === "history" && temp === "cool"){
      $(".location").text(stpetersburg);
      $("#peters-desc").show();
    } else if (activity === "history" && music === "vi"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (activity === "party" &&  music === "no"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "party" &&  temp === "cool"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else if (activity === "opera"){
      $(".location").text(vienna);
      $("#vienna-desc").show();
    } else if (activity === "party"){
      $(".location").text(ibiza);
      $("#ibiza-desc").show();
    } else if (activity === "history"){
      $(".location").text(stpetersburg);
      $("#stpetersburg-desc").show();
    } else if (activity === "woods"){
      $(".location").text(norway);
      $("#norway-desc").show();
    } else if (activity === "springs"){
      $(".location").text(iceland);
      $("#iceland-desc").show();
    } else {
      $(".location").text("somewhere but idk cuz this code's busted");
    }

    if (money === "rich"){
      $(".hotel").text("The Grand Fancypants Hotel");
      $(".stars").text("Price range: $$$$$$$$$$$$$");
    } else if (money === "mid"){
      $(".hotel").text("Decent Budget Hotel/Guesthouse");
      $(".stars").text("Price range: $$$");
    } else if (money === "poor"){
      $(".hotel").text("Cheap AF Hostel");
      $(".stars").text("Price range: $");
    } else {
      $(".hotel").text("somewhere but idk cuz this code's busted");
    }

    $("#result").show();
    event.preventDefault();
  });
});
