var ball, ball1;


function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
 ball.shapeColor = "red";

  ball1 = createSprite(650,350,80,30);
  ball1.shapeColor = "blue";
}


function draw() {
  background(0);  
  
  ball1.x = World.mouseX;
  ball1.y = World.mouseY;
  
if(ball1.x-ball.x < ball.width/2 + ball1.width/2
  && ball.x-ball1.x < ball.width/2 + ball1.width/2
  && ball1.y - ball.y < ball.height/2 + ball1.height/2
  && ball.y - ball1.y < ball.height/2 + ball1.height/2 ) {
  ball.shapeColor = "green";
  ball1.shapeColor = "green";
}else{
  ball.shapeColor = "red";
  ball1.shapeColor = "blue";


}


  drawSprites();
  
}