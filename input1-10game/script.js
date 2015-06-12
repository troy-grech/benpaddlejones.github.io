// ** START VARIABLES HERE! ** //
var randomnumber = 0	// Random number for each round
var playernumber = 0	// Players input   
var playerscore = 0		// Accumulated players score
var computerscore = 0	// Accumulated players score
var continueplay = 0	// Maintains the game loop and triggers game end
var min = 0; // used by random number generator
var max = 0; // used by random number generator


// ** START FUNCTIONS HERE! ** //
function generaterandomnumber (min, max) {  // Random number generator
	randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
};


function playernumberentry () {  // Player data entry and number check
	playernumber = prompt("Enter a number between 1 and 10 and click \"OK\"\nor click \"Cancel\" to end game")
	if (playernumber == null || playernumber === false) {   // User ending game
		continueplay = 1;
		endgame ();
	};
	playernumber = parseInt(playernumber); 
	if (playernumber > 10 || playernumber < 1) {
		alert ("Please choose a number between 1 and 10")
		playernumberentry ();
	};
};


function checkequality () {  // Equality check, player alter and score keeping
	if (randomnumber === playernumber) {
		playerscore ++;
		alert("Correct! Computer " + computerscore + " You " + playerscore);
		} else {
		computerscore ++;
		alert("Sorry! The computer picked " + randomnumber +"\nComputer " + computerscore + " You " + playerscore);
	};
};


function endgame () {  // Ends the game and closes the browser tab
	continueplay = 1;
	alert("Thank you for playing");
	window.close();
};


// ** START CODE HERE ** //
while (continueplay === 0) {   // Game loop
	generaterandomnumber (1,10)
	playernumberentry ();
	if (continueplay === 0) {
		checkequality ();
	};
};