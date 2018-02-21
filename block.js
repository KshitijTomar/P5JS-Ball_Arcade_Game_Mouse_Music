function Block(){

	this.y = random(70 , height-100);
	this.x = width;
	this.w = random(70,width/6);
	this.h = 30;
	this.xspeed=5;

	this.show = function(){
		fill(216, 34, 10);
		rect (this.x, this.y, this.w, this.h, 10);
	}

	this.update = function(){
		this.x-= this.xspeed;

	}

	// this.hit = function(player){
	// 	if (player.y  >= this.y  		  && player.y  <= this.y + this.h 			&& 
	// 		player.x  <= this.x + this.w  && player.y  <= this.y + this.h)
	// 		return true;
	// 	else 
	// 		return false;
	// }


	// function isCollide(a, b) {
 //    return !(
 //        ((a.y + a.height) < (b.y)) ||
 //        (a.y > (b.y + b.height)) ||
 //        ((a.x + a.width) < b.x) ||
 //        (a.x > (b.x + b.width))
 //    );


    this.hit = function(player) {
    	return !(
    		((player.y+player.radius/2) < (this.y)) ||
    		((player.y-player.radius/2) > (this.y + this.h)) || 
    		((player.x+player.radius/2) < (this.x)) || 
			((player.x-player.radius/2) > (this.x + this.w))
			); 
    }
}



/*
a.x= player.x - player.radius 
player.x + player.radius 
a.yplayer.y - player.radius 
player.y + player.radius 


>= player.x - player.radius 
&&
>= player.y - player.radius 

<= player.x + player.radius 
&&
>= player.y - player.radius 


<= player.x + player.radius 
&&
>= player.y - player.radius 


this.x 
this.x + this.w
this.y 
this.y + this.h


	this.hit = function(player){
		if (player.x - player.radius  <= this.x + this.w  && player.y - player.radius  <= this.y + this.h 	&&  //topleft is in
			player.x + player.radius  >= this.x + this.w  && player.y + player.radius  >= this.y + this.h ){	//bottom right is out
			return true;
		}
		if (player.x + player.radius  >= this.x  && player.y - player.radius  <= this.y + this.h 	&&  //topleft is in
			player.x - player.radius  >= this.x + this.w  && player.y + player.radius  >= this.y + this.h ){	//bottom right is out
			return true;
		}


		if(player.x  <= this.x + this.w  && player.y  <= this.y + this.h)
			return true;
		else 
			return false;
	}

*/