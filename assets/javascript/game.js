var targetNumber = 53;
var counter = 0;
var numberOptions = [10, 5, 3, 7];
  
// alert("hi");

$("#total").append(targetNumber);

//  for (var i = 0; i < numberOptions.length; i++) {
// 	$("<img>").attr("data-crystalvalue", "numberOptions[Math.floor(Math.random() * numberOptions.length)]");
// }
  for (var i = 0; i < numberOptions.length; i++) {

    // trying to associate data value to #crystals from numberOptions
    var imageCrystal = $("#crystals").attr("data-crystalvalue","numberOptions[i].random");
}

$(".crystals").on("click", function() {
	var crystalValue = ($(this).data("crystalvalue"));
	counter = counter + crystalValue;
	console.log("New score: " + counter);
if (counter === targetNumber) {
      console.log("You win!");
        }

    else if (counter > targetNumber) {
      console.log("You lose!!");
    }

  });
