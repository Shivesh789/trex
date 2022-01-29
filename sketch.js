
var trex ,trex_running;
function preload(){
  //loading trex animation
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex= createSprite(50,160,20,50)
  //add animation
  trex.addAnimation("trex1",trex_running)
  trex.scale=0.5
  // create a ground sprite
 ground= createSprite (200,180,400,20)
}

function draw(){
  background("white")
  //adding jumping velocity
if(keyDown("space"))
{
  trex.velocityY=-10
}
//adding gravitational pull
trex.velocityY=trex.velocityY+1
//adding collide property
trex.collide(ground)
  drawSprites()

}
