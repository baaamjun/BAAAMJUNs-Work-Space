class Confetti extends Particle {

  // Override the display method
  display() {
    rectMode(CENTER);
    fill(150, 200, 248, this.lifespan);
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    var theta = map(this.position.x, 0, width, 0, TWO_PI * 10);
    rotate(theta);
    rect(0, 0, random(2, 20), random(2, 20));
    pop();
  }
}