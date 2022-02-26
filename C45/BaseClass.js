class BaseClass {
constructor(x, y , height, width, angle) {
var options = 
{

    'restitution': 0.8,
    'density': 1.0,
    'friction': 1.0,
}

this.width = width;
this.height = height;
this.body = Bodies.rectangle (x, y, width,height, options); 
World.add (world, this.body);
}

display(){

    
}

}  