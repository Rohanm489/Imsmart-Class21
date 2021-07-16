var movingRect, fixedRect, rohanRect


function setup() {
  createCanvas(400,400);
  movingRect = createSprite(400, 200, 50, 80);
  fixedRect = createSprite(50, 50, 80, 50);
  rohanRect = createSprite(157, 345, 50, 80);
  movingRect.debug=true;
  fixedRect.debug=true;
  rohanRect.debug=true;

  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  rohanRect.shapeColor = "green"


}


function draw() {
  movingRect.x = mouseX
  movingRect.y = mouseY
  background(0);  
  console.log(movingRect.x-fixedRect.x)
  
  if(isTouching(movingRect,rohanRect))
  {
    movingRect.shapeColor = "blue";
    rohanRect.shapeColor = "blue";
  }
 
else
  {
    movingRect.shapeColor = "green";
    rohanRect.shapeColor = "green";
  }
  
  drawSprites();
}
//pass arguments/parameter
//add(a,b)
//isTouching(movingRect,fixedRect)
//obj1-movingRect and obj2- fixedRect











