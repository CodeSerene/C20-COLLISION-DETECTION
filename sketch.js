var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  

  movingRect=createSprite(400, 250, 50, 80);
  movingRect.shapeColor="lightblue";
  movingRect.debug=true;
}


function draw() {
  background(255,255,255);
   movingRect.x=World.mouseX;
   movingRect.y=World.mouseY;
   console.log(movingRect.x-fixedRect.x);
    if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
      fixedRect.x-movingRect.x < fixedRect.width/2 + fixedRect.width/2 &&
      movingRect.y-fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
      fixedRect.y-movingRect.y < fixedRect.width/2 + fixedRect.width/2 ) {
          movingRect.shapeColor="yellow";
              fixedRect.shapeColor="pink";
   }
  
   else{
    movingRect.shapeColor="purple";
    fixedRect.shapeColor="black";
    
   }

   
  drawSprites();
}