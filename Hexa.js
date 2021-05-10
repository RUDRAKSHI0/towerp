class Hexa {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    this.body = Bodies.rectangle(x,y);
    this.image = loadImage("polygon.png");
     World.add(world, this.body);

    }
  
    display() {
        var pos=this.body.position;
      push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,100,200,40,40);
        pop(); 
    }
  }