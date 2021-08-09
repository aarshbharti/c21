var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rectangle=createSprite(100,100,50,50);
  rectangle.shapeColor="blue";

  rectangle1=createSprite(200,100,50,50);
  rectangle1.shapeColor="brown";

  rectangle2=createSprite(300,100,50,50);
  rectangle2.shapeColor="orange";

  rectangle3=createSprite(400,100,50,50);
  rectangle3.shapeColor="yellow";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,rectangle)){
  movingRect.shapeColor = "red";
  rectangle.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  rectangle.shapeColor = "green";
 }

 bounceOff(movingRect,fixedRect);
  drawSprites();
}




