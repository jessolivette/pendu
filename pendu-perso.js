window.onload = function () {

// global variables

// array for six letters words
var words = [{"w": "TOMATE"}, {"w": "SORTIE"}, {"w": "AMICAL"}, {"w": "FARINE"}, {"w": "FUTILE"}, {"w": "MODULE"}, {"w": "TREIZE"}, {"w": "PATATE"}, {"w": "BISOUS"}, {"w": "CANARD"}];
// current game variable
var partie = 1;
var score = 0;
var wrong = 0;
var right = 0;
// reset game 
var win = false;

// select a word in words
var index= 0;

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
var p = document.getElementById("partie");
var s = document.getElementById("score");
var show = document.getElementById("hide");

	for (var i=0; i<6; i++) {

		if (suggestedLetter === words[index].w[i]){
			letter[i].innerHTML = words[index].w[i];
		}
		
		
		if (letter[0].innerHTML !== "" && letter[1].innerHTML !== "" && letter[2].innerHTML !== "" && letter[3].innerHTML !== "" && letter[4].innerHTML !== "" && letter[5].innerHTML !== "") {
		index++;
		partie++;
		p.innerHTML = "Partie " + partie; 
		score+=4;
		s.innerHTML = "Score : " + score;
		show.style.visibility = "visible";

			for (var j=0; j<6; j++) {
				letter[j].innerHTML = "";
			} // end of for loop
		} // end of if statement
	}

}

};