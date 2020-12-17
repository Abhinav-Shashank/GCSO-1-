var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  //giving random speed
  speed = random(55, 90);

  //giving random weight
  weight = random(400, 1500);
  
  //creating the car
  car = createSprite(50, 200, 50, 50);

  //giving the speed to the car
  car.velocityX = speed;

  //creating the wall
  wall = createSprite(1500, 200, 60, height/2);
  
}

function draw() {
  background(255,255,255);
  
  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX=0;

    deformation= 0.5 * weight * speed * speed/22509
  }
  if(deformation > 180){
     car.shapeColor=color(255,0,0);
 }
  if(deformation < 180 && deformation > 100){
    car.shapeColor=color(230,230,0);
  }
  if(deformation < 100){
    car.shapeColor=color(0,255,0);
  }

  drawSprites();
}