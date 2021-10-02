const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




var base1 
var base2
var link


function setup() {
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;
  getBackgroundImg();
  
  base1=new Ground(700,400,200,10);
  base2 = new Ground(1000,200,200,10);
  box1 = new Box (620,380,40,40)
  box2 = new Box (660,380,40,40)
  box3 = new Box (700,380,40,40)
  box4 = new Box (740,380,40,40)
  box5 = new Box (780,380,40,40)
  box6 = new Box (820,380,40,40)
  box7 = new Box (660,340,40,40)
  box8 = new Box (700,340,40,40)
  box9 = new Box (740,340,40,40)
  box10 = new Box (700,320,40,40)
  box11 = new Box (920,100,40,40)
  box12 = new Box (960,100,40,40)
  box13 = new Box (1000,100,40,40)
  box14 = new Box (1040,100,40,40)
  box15 = new Box (1080,100,40,40)
  box16 = new Box (960,60,40,40)
  box17 = new Box (1000,60,40,40)
  box18 = new Box (1040,60,40,40)
  box19 = new Box (1000,40,40,40)

  
  
  
 
  
  

  polygon = Bodies.rectangle(400,400,50,50)
  World.add(world,polygon);

link = new SlingShot(polygon,{x:300,y:400})

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

  
  
  Engine.update(engine);

  base1.display();
  base2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display(); 
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
 
  link.display();

rect(polygon.position.x,polygon.position.y,50,50)


  drawSprites();


}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  link.fly();

}

function keyPressed(){
  if(keyCode===32){
   slingShot.attach(polygon.body)
  }
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "2113857.jpg";
  }
  else{
      bg = "download.jpg";
  }

  backgroundImg = loadImage(bg);
  
}
