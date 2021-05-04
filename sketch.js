var fixedRect, movingRect;
var ob1,ob2,ob3,ob4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1 = createSprite(500, 300, 50, 80);
  ob1.shapeColor = "green";
  
  ob2= createSprite(530, 800,80,30);
  ob2.shapeColor = "green";
  
  ob3 = createSprite(680, 200, 50, 80);
  ob3.shapeColor = "green";
  
  ob4 = createSprite(700, 600,80,30);
  ob4.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  drawSprites();
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  
  movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";
  }
}
