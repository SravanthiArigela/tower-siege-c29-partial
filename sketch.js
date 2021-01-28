const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,390,900,20)

    block1 = new Block(300,275,40,40);
    console.log(block1);
}  

function draw() {
    background("powderblue"); 
   
    Engine.update(engine);

    ground.display();

    block1.display();
}
