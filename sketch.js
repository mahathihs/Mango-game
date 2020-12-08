
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload()
{
	backgroundImg=loadImage("images/bgImg.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  tree=new Tree(510,10,700,700);
	  ground=new Ground(600,690,1200,20);
	  stone=new Stone(100,250,70);
	  mango=new Mango(520,200,20);
	  man=new Man(stone.body,{x:200,y:50});

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  tree.display();
  ground.display();
  stone.display();
  mango.display();
  man.display();
}
function keyPressed(){
	Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	stone.fly();
}



