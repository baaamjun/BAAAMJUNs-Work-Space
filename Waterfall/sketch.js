let particleSystem;

function setup() {
  createCanvas(360, 420);
  particleSystem = new ParticleSystem(createVector(width/2, 30));
}

function draw() {
  background(255, 10);
  particleSystem.addParticle();
  particleSystem.run();
}