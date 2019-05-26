let particleSystem;

function setup() {
  createCanvas(400, 400);
  particleSystem = new ParticleSystem(createVector(width, 0));
}

function draw() {
  background(0, 50);
  particleSystem.addParticle();
  particleSystem.run();
  
   noStroke();
   fill(249, 237, 47, 150);
   ellipse(90, 150, 100, 100);
  
  noStroke();
   fill(193, 103, 240, 100);
   ellipse(260, 280, 150, 150);
  
  noStroke();
   fill(154, 240, 103, 200);
   ellipse(300, 100, 70, 70);
}