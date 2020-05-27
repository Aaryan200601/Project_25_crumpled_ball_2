var wall1, wall2, wall3, dustbinObj, dustbinImg;
var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	dustbinImg = loadImage("sprites/dustbingreen.png")
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	wall1 = new baseWall(width-125, 625);
	wall2 = new Wall(width-170, 585);
	wall3 = new Wall(width-80, 585);
	ball = new Paper(60, 635);
	ground = new Ground(width/2, 650, width, 20);
	dustbinObj = createSprite(675, 555, 70, 100);
	dustbinObj.addImage(dustbinImg);
	dustbinObj.scale = 0.5;
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
background(255);
rectMode(CENTER);
ball.display();
ground.display();
wall1.display();
wall2.display();
wall3.display();
dustbinObj.display();
drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.position, {x:100, y:-200});
	 }
   }
   

