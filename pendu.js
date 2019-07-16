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
	} // end of for loop	
		
	// happen when all letters are filled
	if (letter[0].innerHTML !== "" && letter[1].innerHTML !== "" && letter[2].innerHTML !== "" && letter[3].innerHTML !== "" && letter[4].innerHTML !== "" && letter[5].innerHTML !== "") {
		index++;
		partie++;
		p.innerHTML = "Partie " + partie; 
		score+=4;
		s.innerHTML = "Score : " + score;
		show.style.visibility = "visible";
		reminder.innerHTML = "";

		for (var j=0; j<6; j++) {
			letter[j].innerHTML = "";
		} // end of for loop
	} // end of if statement
	
	if (partie === 6) {
		alert("YOU WIN !!");
		document.location.reload(true);
	}

	if (suggestedLetter !== words[index].w[0] && suggestedLetter !== words[index].w[1] && suggestedLetter !== words[index].w[2] && suggestedLetter !== words[index].w[3] && suggestedLetter !== words[index].w[4] && suggestedLetter !== words[index].w[5]) {
	sL.push(suggestedLetter);
	handleError();
	}

}// end of function check


function handleError () {

	// reminder for wrong letters
	var reminder = document.getElementById("reminder"); 

	wrong++; // count errors
	reminder.innerHTML = sL; // add letters in reminder.
	img.setAttribute("src", "suspicious.svg");

	animation();

	if ( wrong === 6 ) {
		alert ("YOU LOOSE !");
		document.location.reload(true);
	}

}

function animation () {

	//select petals for animation
	var petal1 = document.getElementById("petal1");
	var petal2 = document.getElementById("petal2");
	var petal3 = document.getElementById("petal3");
	var petal4 = document.getElementById("petal4");
	var petal5 = document.getElementById("petal5");
	var petal6 = document.getElementById("petal6");

		// animation for error.
	if (wrong === 1) {
		petal1.classList.add("vanish");
	}
	else if (wrong === 2) {
		petal2.classList.add("vanish");
	}
	else if (wrong === 3) {
		petal3.classList.add("vanish");
	}
	else if (wrong === 4) {
		petal4.classList.add("vanish");
	}
	else if (wrong === 5) {
		petal5.classList.add("vanish");
	}
	else if (wrong === 6) {
		petal6.classList.add("vanish");
	}
}

};