// Javascript and jquery for crystal collector

$(document).ready(function() {

// Perform initialize tasks
// Variables

var randomMatchNo = 0;
var userTotal = 0;
var totalWins = 0;
var totalLosses = 0;

//runs initial clean during doc ready
loadFunction();


//**********   functions

function loadFunction() {

  userTotal = 0;
  $(".userTotal").html(userTotal);
  // Store the crystal random number in the data element

  for (var i = 1; i < 5; i++) {   
    $("#crystal-" + i).data("crystalRandomNo", (Math.floor(Math.random() * 12) + 1));
    console.log([i] + " " + $("#crystal-" + i).data("crystalRandomNo"));
  }

  //get the random number to be matched
  randomMatchNo  = (Math.floor(Math.random() * 102) + 19);
  $(".computerNo").html(randomMatchNo);

}  //**********  end of loadfunction


  // click on an image, increase the user total, compare to random 
  $(".imgCrystal").on("click", function() {

    userTotal = userTotal + $(this).data("crystalRandomNo");

    $(".userTotal").html(userTotal);

    if (userTotal === randomMatchNo) {   //winner
      totalWins++;
      $(".totalWins").html(totalWins);
      loadFunction();
    } else if (userTotal > randomMatchNo)  {  //loser
      totalLosses++;
      $(".totalLosses").html(totalLosses);
      loadFunction();
    }
  }) //********** end of crystal click 

})  //********** end of document ready