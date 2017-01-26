var r;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	r = new Roller(25);
}

function draw() {
	r.move();
	r.draw();
}

function Roller(rad){
	this.x = 0.01;
	this.y = window.innerHeight/2;
	this.rad = rad;
	var ang = -Math.PI/6
	var vel = 20;

	this.move = function(){
		if(this.x<=0||this.x>=window.innerWidth)
			vel=-vel;

		if(keyIsDown(RIGHT_ARROW))
			vel+=Math.pow(1.05, 1.05);
		else if(keyIsDown(LEFT_ARROW))
			vel-=Math.pow(1.05, 1.05);
		else
			vel/=1.1;
		this.x+=vel;

	}

	this.draw = function(){
		background('black');
		fill('white');
		noStroke();
		ellipse(this.x+15, this.y, 2*this.rad, 2*this.rad);
		quad(this.x, this.y+this.rad+1, this.x, this.y-this.rad,
			 this.x+15, this.y-this.rad, this.x+15, this.y+this.rad);
		quad(this.x, this.y+this.rad+1, this.x, this.y+this.rad-1,
			 0, this.y+this.rad-1, 0, this.y+this.rad+1);
		stroke(1);
		ellipse(this.x, this.y, 2*this.rad, 2*this.rad);
		fill('tan');
		ellipse(this.x, this.y, 0.7*this.rad, 0.7*this.rad);
	}
};