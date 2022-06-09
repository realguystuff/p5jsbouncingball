# p5jsbouncingball
A physics engine that makes a bouncing ball in p5.js (y=0 or lower will make things weird)

## How to use
By using the example.js file, you might get the hang of it. However, it is recommended to read this entire How-to.

### 1. Creating a new BouncingBall
The `constructor` function takes 6 arguments: x, y, r, speed, acc, friction.

The x and y are known, r is size, speed is how fast you want the ball to go down (recommended to use 10), acc is gravity, adding to speed every frame (recommended to use 1) and friction: how long (small) or short (big) the time it takes to have the ball go to rest. (recommended to use 0.001)

### 2. show()
This is naturally known for you, it basically shows the ball.

### 3. update()
If you want the "behind the scenes" thing, then here's how the update works:

speed equals to speed * 0.99 every frame,
y equals to y + speed every frame,
speed equals to speed + acc every frame.

if y > height - r / 2,
  y = height - r / 2
  speed = -speed + 1

acc equals to acc - friction every frame.

if mouseIsPressed equals to true,
  show debug
