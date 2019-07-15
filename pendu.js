window.onload = function () {

/*-------------------------- global variables ---------------------------------------------------*/

// array for six letters words
var words = [{"w": "TOMATE"}, {"w": "SORTIE"}, {"w": "AMICAL"}, {"w": "FARINE"}, {"w": "FUTILE"}, {"w": "MODULE"}, {"w": "TREIZE"}, {"w": "PATATE"}, {"w": "BISOUS"}, {"w": "CANARD"}];
var sL = []; // array to store letters that are not in word to fill the reminder.
// current game variable
var partie = 1;
var score = 0;
var wrong = 0;
// var right = 0; not necessary
// reset game 
var win = false;

// select a word in words
var index= 0;

// selecting elements in DOM
var letter = document.getElementsByClassName("letter"); // empty p elements to fill
const btn = document.getElementById("btn"); // button to trigger check func
var img = document.getElementById("img"); // smiley
var reminder = document.getElementById("reminder"); // reminder for wrong letters

/* ------------------------ event listener -----------------------------------------------------*/

// event listener
btn.addEventListener('click', function (event) {
	check();
});


/*-------------------------- function declaration -----------------------------------------------*/

function check () {
	// get user input
	var suggestedLetter = document.getElementById("suggestedLetter").value.toUpperCase();
	// modify game variables in html
	var p = document.getElementById("partie"); // increment partie number
	var s = document.getElementById("score"); // increment score
	var show = document.getElementById("hide"); // show text when a word is found

	for (var i=0; i<6; i++) { // compare user suggested letter with letters in current word

		if (suggestedLetter === words[index].w[i]){
			letter[i].innerHTML = words[index].w[i];
			img.setAttribute("src", "happy.svg");
		}
		
		// happen when all letters are filled
		if (letter[0].innerHTML !== "" && letter[1].innerHTML !== "" && letter[2].innerHTML !== "" && letter[3].innerHTML !== "" && letter[4].innerHTML !== "" && letter[5].innerHTML !== "") {
		index++;
		partie++;
		p.innerHTML = "Partie " + partie; 
		score+=4;
		s.innerHTML = "Score : " + score;
		show.style.visibility = "visible";

			for (var j=0; j<6; j++) {
				letter[j].innerHTML = "";
			} // end of for loop2
		} // end of if statement
	} // end of for loop1

	if (partie === 6) {
		document.location.reload(true);
	}

	if (suggestedLetter !== words[index].w[0] && suggestedLetter !== words[index].w[1] && suggestedLetter !== words[index].w[2] && suggestedLetter !== words[index].w[3] && suggestedLetter !== words[index].w[4] && suggestedLetter !== words[index].w[5]) {
	sL.push(suggestedLetter);
	handleError();
	}

}// end of function check


function handleError () {

	wrong++; // count errors
	reminder.innerHTML = sL; // add letters in reminder.
	img.setAttribute("src", "suspicious.svg");

	if ( wrong === 6 ) {
		document.location.reload(true);
	}

}

};