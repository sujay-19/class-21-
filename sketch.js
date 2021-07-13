
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,left,right;

function preload()
{
	
}

function setup() {
	createCanvas(550,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(275,500,550,20)
   left  = new Ground(420,470,10,30)
   right = new Ground(480,470,10,30)
	var ball_options = {
		restitution: 0.8,
		isStatic:false
	  }
    
	ball = Bodies.circle(200,50,10,ball_options)
    World.add(world,ball)
	World.add(world,ground)
	World.add(world,right)
	World.add(world,left)
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10)
 if (keyDown("right")) {
	 hfroce()
 }

  ground.show()
  left.show()
  right.show()
  drawSprites();
 
}

function hfroce() {

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.002,y:0.002})
}



