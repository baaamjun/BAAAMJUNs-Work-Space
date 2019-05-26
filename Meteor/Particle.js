// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

  constructor(position) {
    this.acceleration = createVector(-0.1, 0.1);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }

  // Method to display
  display() {
   // stroke(255, this.lifespan);
   // strokeWeight(2);
    fill(0, 150);
    ellipse(this.position.x, this.position.y, 7, 7);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}