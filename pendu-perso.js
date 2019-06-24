window.onload = function () {

// global variables

// array for six letters words
var words = [{"w": "TOMATE"}, {"w": "SORTIE"}, {"w": "AMICAL"}, {"w": "FARINE"}, {"w": "FUTILE"}, {"w": "MODULE"}, {"w": "TREIZE"}, {"w": "PATATE"}, {"w": "BISOUS"}, {"w": "CANARD"}];
// current game variable
var game = 1;
var score = 0;
var wrong = 0;
var right = 0;
// reset game 
var win = false;

// select a word randomly
var rand = Math.floor(Math.random()*10);
console.log(rand);
// selecting elements in DOM
var letter = document.getElementsByClassName("letter"); // empty p elements to fill
const btn = document.getElementById("btn"); // button to trigger check func

// event listener
btn.addEventListener('click', function (event) {
	check();
});



function check () {
	// get user input
var suggestedLetter = document.getElementById("suggestedLetter").value;

	for (var i=0; i<6; i++) {

		if (suggestedLetter === words[0].w[i]){
			letter[i].innerHTML = words[0].w[i];
		}
	}

}

}; // end of window.onload