let x, y;
let speed, acc;

let ball;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  x = width/2;
  y = height/2+25;
  
  speed = 10;
  acc = 1;
  
  ball = new BouncingBall(x, y, 75, speed, acc, 0.001);
}

function draw() {
  background(0);
  
  ball.update();
  ball.show();
  
  frameRate(Infinity);
}
