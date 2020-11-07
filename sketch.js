const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, ground;
var box1, box2, box3;

function setup()
{
  var canvas=createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  paper = new Paper(150, 300, 70);
  ground = new Ground(200, 350, 2000, 10);
  box1 = new Dustbin(800,300,100,100);
}
function draw()
{
  background("White");
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  keyPressed();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-2});
  }
}