$(document).ready(function(){
  $("form#vacation").submit(function(event){
    var name = $("input#name").val();
    var color = $("select#color").val();
    var temp = $("select#temp").val();
    var activity = $("select#activity").val();
    var music = $("select#music").val();
    var money = $("select#money").val();

    console.log(name, color, temp, activity, music, money);


    event.preventDefault();
  });
});
