var bubbles = [];

function setup() {
	createCanvas(600, 400); 
	for(var i = 0; i < 10; i++) {
		var x = random(width);
		var y = random(length);
		var r = random(10, 40);
		bubbles[i] = new Bubble(x, y, r);
		bubbles.push(b);
	}
}
function draw() { 
	background(0); 
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}
class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y; 
		this.r = r;
		this.brightness = 0;
	}
	clicked (px, py){
		var d = dist(px, py, this.x, this.y);
		if (d this.r){
			this brightness = 255;
		}
	}
	move() {
	  this.x = this.x + random(-5,5);
	  this.y = this.y + random(-5,5);
	}
	show() {
	  stroke(255);
	  strokeWeight(4);
	  fill(this.brightness, 125);
	  ellipse(this.x, this.y, this.r * 2, this.r); 
	}

}