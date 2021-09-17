
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinObj , paperObj , groundObj;
var world;


function setup() {
	createCanvas(1600, 700);
   


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	dustbinObj = new dustbin(1200,650);
	paperObj = new paper(200,450,40);
	groundObj = new ground(width/2,670,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
		  width:1200,
		  height:700,
		  wireframes: false
	  }
    })

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  
 paperObj.display();
 dustbinObj.display();
 groundOb.display();

  drawSprites();
 keyPressed();
}

function keyPressed()
{
	if(keycode === UP_ARROW)
	{

		Matter.bpdy.applyForce(paperObj.body , paperObj.body.position,{x:85 , y:-85} )
		
	}
}

