var ball, ball2;

function setup() {
  createCanvas(400,400);

  ball=createSprite(200,200,30,40);
  ball2=createSprite(300,300,50,50);
}

function draw() 
{
  background(30);

ball.velocityX=-3;


if(keyDown(LEFT_ARROW)){
  ball2.x=ball2.x-5;
  background("red");
}


drawSprites();
}




