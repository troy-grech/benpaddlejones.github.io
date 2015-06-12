var images = {};
var loadedImages = 0;
var numImages = 0;
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');
var sources = {
    rock: "images/rock.png",
    scissors: "images/scissors.png",
	paper: "images/paper.png",
	};
var randomnumber = 0;   // if statement converts this to an element
var playerchoice = 0;
var playerscore = 0;
var computerscore = 0;
var canvas = 0;
var parent = 0;
var currentcanvasheight = 0;
var currentcanvaswidth = 0;
var screenfont = 0;
var screenfontsize = 0;
var winordraw = 0;
var winningimage = 0;
var losingimage = 0;

//resize canvas to full screen	 
canvas = document.getElementById("gameCanvas");
parent = document.getElementById("Game");
canvas.width = parent.offsetWidth;
canvas.height = parent.offsetHeight;
currentcanvasheight = parent.offsetHeight;
currentcanvaswidth = parent.offsetWidth;
screenfontsize = currentcanvasheight * 0.10;
screenfont = "bold " + screenfontsize + "px Comic Sans MS";


// event listers for click & touch of DIV tags
document.getElementById("Rockbutton").onclick = gamerock;
document.getElementById("Paperbutton").onclick = gamepaper;
document.getElementById("Scissorsbutton").onclick = gamescissors;


// Load images to canvas
    function loadImages(sources, callback) {    
		for(var src in sources) {         	// get num of sources
        numImages++;
        }
    for(var src in sources) {
        images[src] = new Image();
			images[src].onload = function() {
				if(++loadedImages >= numImages) {
				callback(images);
				}
			};
        images[src].src = sources[src];
        }
    } 
  
  
// Wipes and redraws the canvas wit images loaded in loadimages function
    function updatecanvas() {
		canvas.width = canvas.width; // clears the canvas 
        loadImages(sources, function(images) {                 //load images
			if (winningimage == 1) {
			context.drawImage(images.rock, currentcanvaswidth * 0.33, currentcanvasheight * 0.30, currentcanvasheight * 0.50, currentcanvasheight * 0.50);   // 1
			};
			if (winningimage == 2) {
			context.drawImage(images.paper, currentcanvaswidth * 0.33, currentcanvasheight * 0.30, currentcanvasheight * 0.50, currentcanvasheight * 0.50);   // 1
			};
			if (winningimage == 3) {
			context.drawImage(images.scissors, currentcanvaswidth * 0.33, currentcanvasheight * 0.30, currentcanvasheight * 0.50, currentcanvasheight * 0.50);   // 1
			};
			if (losingimage == 1) {
			context.drawImage(images.rock, currentcanvaswidth * 0.66, currentcanvasheight * 0.30, currentcanvasheight * 0.50, currentcanvasheight * 0.50);   // 1
			};
			if (losingimage == 2) {
			context.drawImage(images.paper, currentcanvaswidth * 0.66, currentcanvasheight * 0.30, currentcanvasheight * 0.50, currentcanvasheight * 0.50);   // 1
			};
			if (losingimage == 3) {
			context.drawImage(images.scissors, currentcanvaswidth * 0.66, currentcanvasheight * 0.30, currentcanvasheight * 0.50, currentcanvasheight * 0.50);   // 1
			};

			loadtext();
			function loadtext () {                    	// Load Text
				context.font = screenfont;
				context.fillText("Player score: " + playerscore, 10, currentcanvasheight * 0.10);
				context.font = screenfont;
				context.fillText("Computer score: " + computerscore, 10, currentcanvasheight * 0.25);
				if (winordraw != 0 ) {
				context.font = screenfont;
				context.fillText(winordraw, currentcanvaswidth * 0.55, currentcanvasheight * 0.60);
				};
			}
		});
 
    }

// Player choice	
function gamerock() {
	playerchoice = 1;
	gameloop();
    updatecanvas();
};
	
function gamepaper() {
	playerchoice = 2;
	gameloop();
    updatecanvas();
};
	
function gamescissors() {
	playerchoice = 3;
	gameloop();
    updatecanvas();
};
	
	
// Game loop
function gameloop() {

	randomnumber = Math.floor(Math.random() * 3) + 1;  // Random number generator
			
	if (randomnumber == playerchoice) {
		gamedraw();
	} else {
		if (randomnumber == 1 && playerchoice == 3) {
			computerwins();
		};
		if (randomnumber == 1 && playerchoice == 2) {
			playerwins();
		};
		if (randomnumber == 2 && playerchoice == 3) {
			playerwins();
		};
		if (randomnumber == 2 && playerchoice == 1) {
			computerwins();
		};
		if (randomnumber == 3 && playerchoice == 1) {
			playerwins();
		};
		if (randomnumber == 3 && playerchoice == 2) {
			computerwins();
		};
	};
		
}

function computerwins() {
	winordraw = "beats";
	computerscore ++;
	winningimage = randomnumber;
	losingimage = playerchoice;
	// alert("You loose, sorry! Computer " + computerscore + " You " + playerscore);
};
		
function playerwins() {
	winordraw = "beats";
	playerscore ++;
	winningimage = playerchoice;
	losingimage = randomnumber;
	// alert("You Win! Computer " + computerscore + " You " + playerscore);	
};

function gamedraw() {
	winordraw = "draws";
	winningimage = randomnumber;
	losingimage = playerchoice;
	 // alert("It's a draw! Computer " + computerscore + " You " + playerscore);	
};	
	
	
	  
updatecanvas();



