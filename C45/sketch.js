const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, cube, wall, floor, wall1, wall2, nonstaticwall;

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(0,200,800,20,ground_options);
    World.add(world,ground);

    var cube_options ={
        restitution: 0.2,
        friction: 0.1,
        denstity: 1,
    }

    cube = Bodies.rectangle(100,100,20,34, cube_options);
    World.add(world,cube);

    console.log(ground);

    wall = Bodies.rectangle (250,200,80,20, ground_options);
    World.add(world,wall);

    floor = Bodies.rectangle (535, 550, 800, 20, ground_options);
    World.add(world,floor);

    wall1 = Bodies.rectangle (650, 300, 80, 20, ground_options);
    World.add(world,wall1);

    wall2 = Bodies.rectangle (800, 300 ,80, 20, ground_options);
    World.add(world,wall2);

    nonstaticwall = Bodies.rectangle (940, 135,800,20, ground_options);
    World.add(world,nonstaticwall);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,250,20);

    rectMode(CENTER);
    rect(cube.position.x, cube.position.y, 35, 35);

    rectMode(CENTER);
    rect(wall.position.x, wall.position.y, 25, 500);

    rectMode(CENTER);
    rect(floor.position.x, floor.position.y, 600,20);
    
    rectMode(CENTER);
    rect(wall1.position.x, wall1.position.y, 25,350); 

    rectMode(CENTER);
    rect(wall2.position.x, wall2.position.y, 25,350);

    rectMode(CENTER);
    rect(nonstaticwall.position.x, nonstaticwall.position.y, 250,20);

    
  if (keyDown("RIGHT_ARROW"))  {

   cube.x = cube.x + 10;

  }
    



}