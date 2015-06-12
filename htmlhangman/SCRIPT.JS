// ** START VARIABLES HERE! ** //
var textline1 = "&nbsp&nbsp&nbsp&nbsp------";
var textline2 = "&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp|";
var textline3 = "&nbsp&nbsp&nbsp&nbsp0&nbsp&nbsp&nbsp&nbsp|";
var textline4 = "&nbsp&nbsp/|\\&nbsp&nbsp&nbsp|    ";
var textline5 = "&nbsp&nbsp&nbsp&nbsp^&nbsp&nbsp&nbsp&nbsp|";
var textline6 = "------------ ";
var textline1dead = "";
var textline2dead = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|";
var gameword = 0;
var wordhint = 0;
var letter1 = "_";
var letter2 = "_";
var letter3 = "_";
var letter4 = "_";
var letter5 = "_";
var maxwords = 5;
var gamecount = 0;
var correctguess = 0;
var incorrectguess = 0;
var randomnumber = 0;	// Random number for new word
var playerguessletter = 0;	// Players input   
var playerguess = 0;
var playerscore = 0;		// Accumulated players score
var computerscore = 0;	// Accumulated players score
var continueplay = 0;	// Maintains the game loop and triggers game end


// ** START FUNCTIONS HERE! ** //
function get(elementID) { 
	var d = document; 
	var r = d.getElementById(elementID); 
	return r; 
}; 

function show(elementID) { 
		var msg = get(elementID); 
		msg.style.display = 'block'; 
		if (gamecount == 0) {
			gamereset();
		};
}; 

function hide(elementID) { 
	var msg = get(elementID); 
	msg.style.display = 'none'; 
};


function rewritehtml (guess) {
	switch (guess){
		case "first":
			playerguessletter = 0
			if (gameword.charAt(playerguessletter) == letter1) {
				return;
			};
			break;
		case "second":
			playerguessletter = 1
			if (gameword.charAt(playerguessletter) == letter2) {
				return;
			};
			break;	
		case "third":
			playerguessletter = 2
			if (gameword.charAt(playerguessletter) == letter3) {
				return;
			};
			break;	
		case "forth":
			playerguessletter = 3
			if (gameword.charAt(playerguessletter) == letter4) {
				return;
			};
			break;	
		case "fifth":
			playerguessletter = 4
			if (gameword.charAt(playerguessletter) == letter5) {
				return;
			};
			break;
	};
	checkequality (prompt ("Guess the " + guess + " letter"));
	updatediv ();
	if ( correctguess == 5 ) {
		playerscore ++
		alert ( "Congratulations the answer was " + gameword + "!\n Your score is " + playerscore + " points, the computers score is " + computerscore + " points.\nA new word is waiting for you");	
		gamereset ();
	};
	if ( incorrectguess == 5 ) {
		computerscore ++
		alert ( "Sorry, you on have 5 chances!\n Your score is " + playerscore + " points, the computers score is " + computerscore + " points.\nA new word is waiting for you");	
		gamereset ();
	};
};

function gamereset () {
	letter1 = "_";
	letter2 = "_";
	letter3 = "_";
	letter4 = "_";
	letter5 = "_";
	textline1 = "&nbsp&nbsp&nbsp&nbsp------";
	textline2 = "&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp|";
	textline3 = "&nbsp&nbsp&nbsp&nbsp0&nbsp&nbsp&nbsp&nbsp|";
	textline4 = "&nbsp&nbsp/|\\&nbsp&nbsp&nbsp|    ";
	textline5 = "&nbsp&nbsp&nbsp&nbsp^&nbsp&nbsp&nbsp&nbsp|";
	textline6 = "------------ ";
	correctguess = 0;
	incorrectguess = 0;
	gamecount ++;
	switch (gamecount){
		case 1:	
			gameword = "WHALE"
			wordhint = "A type of shark"
			break;
		case 2:
			gameword = "CHAIR"
			wordhint = "Something you sit on"
			break;	
		case 3:
			gameword = "FLOUR"
			wordhint = "Not the type you smell"
			break;	
		case 4:
			gameword = "TABLE"
			wordhint = "A place for putting things"
			break;	
		case 5:
			gameword = "PHONE"
			wordhint = "Ring Ring"
		case 6:
			endgame ()
			return;
			break;
	};
	updatediv ();
};

function secondhint () {  
	randomnumber = Math.floor(Math.random() * 5) + 0;
	switch (randomnumber){
		case 0:
			playerguessletter = "first"
			break;
		case 1:
			playerguessletter = "second"
			break;	
		case 2:
			playerguessletter = "third"
			break;	
		case 3:
			playerguessletter = "forth"
			break;	
		case 4:
			playerguessletter = "fifth"
			break;	
	};
	alert ("The " + playerguessletter + " letter is \"" + gameword.charAt(randomnumber) + "\"" + "\nThis hint cost you .25 points");
	playerscore = playerscore - 0.25;
};

function firsthint () {
	alert ("\"" + wordhint + "\"" + "\nThis hint cost you .25 points");
	playerscore = playerscore - 0.25;
};

function checkequality (playerguess) {  // Equality check, player alter and score keeping
	if (gameword.charAt(playerguessletter)  == playerguess.toUpperCase()) {
		correctguess ++;
		switch (playerguessletter){
			case 0:
				letter1 = gameword.charAt(playerguessletter)
				break;
			case 1:
				letter2 = gameword.charAt(playerguessletter)
				break;	
			case 2:
				letter3 = gameword.charAt(playerguessletter)
				break;	
			case 3:
				letter4 = gameword.charAt(playerguessletter)
				break;	
			case 4:
				letter5 = gameword.charAt(playerguessletter)
				break;	
		};
	} else {
		incorrectguess ++;
		switch (incorrectguess){
			case 1:
				textline5 = textline2dead
				break;
			case 2:
				textline4 = textline2dead
				break;	
			case 3:
				textline3 = textline2dead
				break;	
			case 4:
				textline2 = textline2dead
				break;	
			case 5:
				textline1 = textline1dead
				break;	
		};
	};
};

function updatediv () {
	document.getElementById("msg").innerHTML = "<br><p>Play hangman</p><p><br>" + textline1 + "<br>" + textline2 + "<br>" + textline3 + "<br>" + textline4 + "<br>" + textline5 + "<br>" + textline6 + "<br>" + letter1 + "&nbsp&nbsp" + letter2 + "&nbsp&nbsp" + letter3 + "&nbsp&nbsp" + letter4 + "&nbsp&nbsp" + letter5 + "</p>";
	}

function endgame () {
	alert ("This is a basic game with only " + maxwords + " in its database. It only demonstrates the potential to have JavaScript interacting with HTML in real time (asynchronously). Thank you for playing, please press f5 to play again or close your browser tab to exit.");
	hide ('msg');
}