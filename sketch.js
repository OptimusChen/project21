var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  thickness = random(22, 83);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 50);
  speed = random(223, 321);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2 
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2){
      if (0.5 * weight * speed * speed < 10){
        bullet.shapeColor = 'green';
        wall.shapeColor = 'green';
      }else if (0.5 * weight * speed * speed > 10){
        bullet.shapeColor = 'red';
        wall.shapeColor = 'red';
  }else{
    bullet.shapeColor = 'green';
    wall.shapeColor = 'green';
  }

  drawSprites();

    }
}