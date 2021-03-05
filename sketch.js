//all the constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
//variables
var world,engine,boy;
var treeObj, stoneObj,groundObj, launcherObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

//imagarinry

function preload(){
	boy=loadImage("boy.png");
  }
//yes,setup
function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;
  
  groundObj=new ground(width/2,600,width,20);

  treeObj=new tree(1050,580);

	stoneObj=new stone(215,400,30); 
 
  mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
  
  launcherObj=new launcher(stoneObj.body,{x:235,y:420})

	Engine.run(engine);
 
}
//wow
function draw() {

  background(130);

  textSize(25);
  fill("cyan");
  text("reload for another chance",50 ,50);
  text("made by om:)", 50, 550)
  image(boy ,200,340,200,300);

  groundObj.display();
  treeObj.display();
  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  
  launcherObj.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObj.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObj.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){

    mangoPos=lmango.body.position;
    stonePos=lstone.body.position;
  
    var distance=dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)

  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }