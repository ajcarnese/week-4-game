var targetNumber = Math.floor(Math.random()*50 + 20)
var counter = 0;
var numberOptions = [10, 5, 3, 7];
var wins = 0;
var lose = 0;
var audioElement = document.createElement('audio');
// var button = $("<button type = button>").addClass("btn", "btn-success").html("New Game");
// alert("hi");

$("#total").append(targetNumber);
$("#soFar").append(counter);


// trying to associate data value to #crystals from numberOptions or randomly

// $('#crystals').attr('data-val', Math.floor(Math.random()*30));


// $("#crystals").data("crystalValue", "Math.ceil(Math.random()*11)")

//  for (var i = 0; i < numberOptions.length; i++) {
// 	$("<img>").attr("data-crystalvalue", "numberOptions[Math.floor(Math.random() * numberOptions.length)]");
// }
//   for (var i = 0; i < numberOptions.length; i++) {
// $("#crystals").attr('data-val',"numberOptions[i].random");
    
// }


function initNewGame(){
    // resets game variables
    targetNumber = Math.floor(Math.random()*50 + 20);
	counter = 0;
	$("#total").html(targetNumber);
	$("#soFar").html(counter);
}


// When clicking on crystals...
$(".crystals").on("click", function() {
	var crystalValue = ($(this).data("crystalvalue"));
	counter = counter + crystalValue;
	// console.log("New score: " + counter);
	$("#soFar").html(counter);

if (counter === targetNumber) {
      // console.log("You win!");
      $("#score").html("You Won!");
      $("#score").append(button);
      wins++;
      initNewGame();
  }

    else if (counter > targetNumber) {
      // console.log("You lose!!");
      $("#score").html("You lose!");
      lose++;
      initNewGame();
     
    }

  });
