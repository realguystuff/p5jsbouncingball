class BouncingBall {
  constructor(x, y, r, speed, acc, friction) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = speed;
    this.a = acc;
    this.friction = friction;

    this.debug = false;
  }

  show() {
    circle(this.x, this.y, this.r);
    if (mouseIsPressed) {
      this.debug = true;
    } else {
      this.debug = false;
    }
  }

  update() {
    const hd = height - this.r / 2;
    this.s *= 0.99;
    this.y += this.s;
    this.s += this.a;
    if (this.y > hd) {
      this.y = hd;
      this.s = -this.s + 1;
    }
    this.a -= this.friction;

    if (this.debug) {
      const radu = this.y - this.r / 2;
      const radd = this.y + this.r / 2;
      const radr = this.x - this.r / 2;
      const radl = this.x + this.r / 2;

      stroke(0, 0, 255);
      line(0, this.y, width, this.y);
      line(this.x, 0, this.x, height);

      stroke(255, 0, 0);
      line(0, radu, width, radu);
      line(0, radd, width, radd);
      line(radr, 0, radr, height);
      line(radl, 0, radl, height);

      noStroke();
    }
  }
}
