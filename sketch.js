var bubbles = [];
var pts = 0;
var j =30;
let myTri = {
	x:200,
	y:200, r:0
}
var gameState="title";
var clockCounter = 30;
function setup() {
	createCanvas(600, 400); 
	setInterval(clockTick,1000);
	for(var i = 0; i < 30; i++) {
		var x = random(width);
		var y = random(height);
		var r = random(20, 60);
		var b = new Bubble(x, y, r);
		bubbles.push(b);
		
	}
}
function drawTimer(){
	fill("red");
	textAlign(left);
	textSize(32);
	text("Timer: "+clockCounter, 10, 30);
	
	text("Score: "+score, 10, 60);
}
function titleScreen(){
	stroke(white);
	strokeWeight(4);
	fill("red");
	textAlign(CENTER);
	textSize(32);
	text("Click anywhere to play", width/2, height/2);
}
function clockTick(){
	if (gameState=="inGame" && clockCounter > 0){
		clockCounter--;
	}
}
function draw() { 
	background(0); 
	drawTimer();
	if (gameState == "title"){
		titleScreen();
	} else {
		/* for (let i=emenyArray.length-1; i>=0;i--;){
			emenyArray[i].move();
			emenyArray[i].show();
			checkForCollision(i);
		} */
	}
	if(timer == 0){
		textSize(32);
		text("Points: "+pts, 200, 250);
		fill(0, 102, 153);
		text("You couldn't finish in 700 milliseconds", 10, 60);
		fill(0, 102, 153);
		timer.html(framcount);
	}
	if(j == 0){
		textSize(32);
		text("Points: "+pts, 200, 200);
		fill(0, 102, 153);
		timer = 700 - timer;
		text("The time you beaten was in: "+timer+" milliseconds", 10, 225);
		fill(0, 102, 153);
		timer.html(framcount);
		
	}
	for (var i = 0; i < bubbles.length; i++) {
		if(bubbles[i].rollover(mouseX, mouseY)) {
			bubbles[i].changeColor(255);
		}else {
			bubbles[i].changeColor(0);
		}
		bubbles[i].move();
		bubbles[i].show();
	}
	textSize(32);
	text("Points: "+pts, 10, 30);
	fill(0, 102, 153);
	text("Timer: "+timer, 10, 60);
	fill(0, 102, 153);
	timer = timer -1;
}
function mousePressed(){
	for(var i = bubbles.length - 1; i >=0; i--){
		if (bubbles[i].rollover(mouseX, mouseY)) {
			bubbles.splice(i, 1);
			pts = pts + 1;
			j = j-1;
			j
		}
	}
}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y; 
		this.r = r;
		this.brightness = 0;
	}
	changeColor(bright) {
		this.brightness = bright;
	}
	
	rollover(px, py){
		var d = dist(px, py, this.x, this.y);
		if (d < this.r){
			return true;
		} else {
			return false;
		}
	}
	move() {
	  this.x = this.x + random(-2,2);
	  this.y = this.y + random(-2,2);
	}
	show() {
	  stroke(255);
	  strokeWeight(4);
	  fill(this.brightness, 125);
	  ellipse(this.x, this.y, this.r * 2, this.r); 
	}
}
