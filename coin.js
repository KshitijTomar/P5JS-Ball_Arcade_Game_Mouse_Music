function Coin(){

	this.y = random(70 , height-100);
	this.x = random(20 , width-30);
	this.radius = 20;

	this.show = function(){
		fill(255,255,0);
		ellipse (this.x,this.y, this.radius , this.radius);
	}

	this.hit = function(player){
		if (player.x >= this.x - this.radius && player.x <= this.x + this.radius && 
			player.y >= this.y - this.radius && player.y <= this.y + this.radius)
			return true;
		else 
			return false;
	}
}