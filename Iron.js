class Iron{
	constructor(x,y)
	{
		var options = {
			'density':1,
			'friction': 5.0,
			'restitution':0.3
		  };
		this.x=x;
		this.y=y;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			
			pop()
	}

}