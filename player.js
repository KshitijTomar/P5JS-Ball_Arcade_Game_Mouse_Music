function Player(){

	this.y = width/2;
	this.x = width/2;
	this.radius = 30;
	this.gravity = .67;
	this.vel = 0;
	this.xspeed=0;

	this.show = function(){
		fill(255);
		ellipse (this.x,this.y, this.radius , this.radius);
	}
var mx; var my;
	this.show = function(mx, my){
		this.x = mx;
		this.y = my;
		if(this.y > height - 60){
			this.y = height-60;
			this.vel = 0;
		}

		if(this.y < 0){
			this.y = 0;
			this.vel = 0;
		}


		if(this.x > width-this.radius){
			this.x = width-this.radius;
			this.xspeed = 0;
		}

		if(this.x < this.radius){
			this.x = this.radius;
			this.xspeed = 0;
		}
		fill(255);
		ellipse (this.x,this.y, this.radius , this.radius);
	}

	this.update = function(){
		this.vel+= this.gravity;
		this.vel*=0.9;
		this.y+=this.vel;

		this.xspeed*=0.92;
		this.x+=this.xspeed;

		// if(this.xspeed >0){
		// 	this.xspeed -= this.gravity;
		// }
		// if(this.xspeed <0){
		// 	this.xspeed += this.gravity;
		// }
		
		
	}


	this.up = function(){
		this.vel = -10;
	}

	this.left = function(){
		this.xspeed = -5;
	}

	this.right = function(){
		this.xspeed = 5;
	}
}