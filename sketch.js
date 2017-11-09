var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height);
    var r = random(20, 60);
    var b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}
function jump(){
	background(0);
	if(gameStats =="title"){
		titleScreen();
	}
	if(gameStats =="inGame"){
		Game();
	}
	if(gameStats =="Lose"){
		Lose();
	}
	if(gameStats =="Win"){
		Win();
	}
}













function Lose(){
	textSize(30);
	textAlign(CENTER)
}
function mousePressed() {
  for (var i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
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

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2,this.r);
  }
}