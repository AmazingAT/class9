var box

function setup() {
  createCanvas(400,400);

  box=createSprite(45,90,26,33);

}

function draw() 
{
  background(30);

  drawSprites();

  if(keyDown("right")){
    box.velocityX=2;
    console.log("Hello");
  }
}




