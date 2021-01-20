var fixed;
var move;

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 100);
  move.shapeColor="blue";
  fixed = createSprite(200,200,100,50);
  fixed.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
   move.x=World.mouseX;
  move.y=World.mouseY;
 
  console.log(move.width/2+fixed.width/2,move.x-fixed.x);
  
  if(isTouching(move,fixed)){
  fixed.shapeColor="pink";
  move.shapeColor="pink";
  }
  else {
      fixed.shapeColor = "blue";
      move.shapeColor = "blue";
  }

  drawSprites();
  
}
function isTouching(object1,object2){
    if(object2.x-object1.x<object2.width/2+object1.width/2 
      && object1.x-object2.x<object2.width/2+object1.width/2
      && object2.y-object1.y<object2.height/2+object1.height/2
      && object1.y-object2.y<object2.height/2+object1.height/2){
       return true;
      }
      else{
     
        return false;
     }



}