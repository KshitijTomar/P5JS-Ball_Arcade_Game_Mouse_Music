var canvas;


var player;
var coins = [];
var blocks = [];
var Score = 0 ;
var gameOver = false;

var level = 0.5;
var createdTime;
var finishTime;

var coin_sound;
var gameover_sound;
var song;

function preload(){
	song = loadSound("playback.mp3");
}


function setup() {
	var width = 800;
	var height = 600;
	canvas = createCanvas(window.innerWidth-20, window.innerHeight-20);
	player = new Player();

	//time
	createdTime= new Date().getTime();

	//sounds

	song.play();
	coin_sound = loadSound("coin.mp3");
	gameover_sound = loadSound("gameover.mp3");
	
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};

function draw() {
	song.setVolume(0.5);

	background(20);
	fill(255);
	rect(0, height - 46, width, 3);

	if(gameOver ==false){
		//coins
		if(frameCount %80 ==0){ coins.push(new Coin());	}
		for(var i = coins.length-1  ; i >= 0; i--){
			coins[i].show();
			if(coins[i].hit(player)){
				coins.splice(i,1);
				Score++;
				level*=1.07;
				coin_sound.play();
			}
		}

		if(frameCount %floor(120/level) ==0){ blocks.push(new Block());	}
		for(var i = blocks.length-1  ; i >= 0; i--){
			blocks[i].show();
			blocks[i].update();
			if(blocks[i].hit(player)){
				gameOver=true;
				finishTime = new Date().getTime();
				// console.log(finishTime);
				gameover_sound.play();
				song.stop();
			}
		}


		//player
		player.show(mouseX, mouseY);
		player.update();


		if (keyIsDown(LEFT_ARROW)) {
	        player.left();
		}
		if (keyIsDown(RIGHT_ARROW)) {
	        player.right();
		}

		if (keyIsDown(UP_ARROW)) {
	        player.up();
		}
	}else{
		var reactionTime = (finishTime - createdTime)/1000;
		textSize(32);
		fill(216, 34, 10);
		text('GAME OVER',width-300, height-140);
		textSize(20);
		text('Score : ' + Score, width-200, height-94);
		
		text('Time : ' + floor(reactionTime) + 'sec',width-200, height-70	);
	    fill(40,255,255);
	    text('Refresh the page to RESTART the game',75, height-50);


		
	}

	//text on top
	textSize(14);
	fill(40,255,255);
	text('Hover the Mouse pointer to move.',10, 20);
	fill(225,225,0);
	text('Collect the coins to increase your score',10, 40);
	fill(255, 35, 35);
	text('Stay away from the Red Boxes',10, 60);
	//Score
	textSize(18);
	fill(40,255,255);
	text('Score : ' + Score ,width-150, 50);
	//Level
	text('Level : ' + floor(level) ,width-150, 70);
	
}

// function mouseMoved() {
//   player.show(mouseX, mouseY);
//   // prevent default
//   return false;
// }

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     player.up();
//   }
// }