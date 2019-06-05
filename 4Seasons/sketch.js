let system;
let system2;
let system3;
let system4;
let system5;
let system6;

let img;

function preload() {
  img = loadImage('Tree.png');
}

function setup() {
  createCanvas(720, 400);
  //image(img, 10, 10);
  system = new ParticleSystem(createVector(width / 2, 100));
  system2 = new ParticleSystem(createVector(width / 2 - 50, 150));
  system3 = new ParticleSystem(createVector(width / 2, 150));
  system4 = new ParticleSystem(createVector(width / 2 + 50, 150));
  system5 = new ParticleSystem(createVector(width / 2 - 25, 200));
  system6 = new ParticleSystem(createVector(width / 2 + 25, 200));


}

function draw() {
  background(255);
  image(img, 285, 50, 150, 250);
  system.addParticle();
  system.run();
  system2.addParticle();
  system2.run();
   system3.addParticle();
  system3.run();
  system4.addParticle();
  system4.run();
   system5.addParticle();
  system5.run();
  system6.addParticle();
  system6.run();

}


// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(random(-0.01, 0.01), random(0, 0.01));
  this.velocity = createVector(random(-0.5, 0.5), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 400;
};

Particle.prototype.run = function() {
  if(mouseX < width/2 && mouseY < height/2)
  {
   this.update1();
   this.display1();
  }
  else if(mouseX > width/2 && mouseY < height/2)
  {
    this.update2();
   this.display2();
  }

  else if(mouseX > width/2 && mouseY > height/2)
  {
    this.update3();
   this.display3();
  }
  else if(mouseX < width/2 && mouseY > height/2)
  {
    this.update4();
   this.display4();
  }
};

// Method to update position
Particle.prototype.update1 = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
};
Particle.prototype.update2 = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
};
Particle.prototype.update3 = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
};
Particle.prototype.update4 = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
};

// Method to display
Particle.prototype.display1 = function() {
  stroke(244, 150, 255, this.lifespan);
  strokeWeight(2);
  fill(234, 47, 179, this.lifespan);
  arc(this.position.x, this.position.y, 15, 15, 0, PI + QUARTER_PI);
};
Particle.prototype.display2 = function() {
  stroke(50, 214, 29, this.lifespan);
  strokeWeight(2);
  fill(36, 239, 129, this.lifespan);
  square(this.position.x, this.position.y, 15, 20);
};
Particle.prototype.display3 = function() {
  stroke(217, 77, 40, this.lifespan);
  strokeWeight(2);
  fill(244, 137, 32, this.lifespan);
  triangle(this.position.x, this.position.y, this.position.x + 10, this.position.y + 10, this.position.x -10, this.position.y + 10);
};
Particle.prototype.display4 = function() {
  stroke(25, 208, 241, this.lifespan);
  strokeWeight(2);
  fill(33, 154, 239, this.lifespan);
  rect(this.position.x, this.position.y, 15, 15);
};

Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
