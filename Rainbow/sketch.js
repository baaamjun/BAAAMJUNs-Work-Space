
var w;

var xoff = 1;
var yoff = 5;




function setup() {
  createCanvas(500, 500);
  w = new Walker();
}

function draw() {
   background(220, 3);
  w.update();
  w.display();
}

function Walker() {
  this.pos = createVector(width, height);
  this.vel = createVector(0, 0);

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.05);
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

    this.display = function() {
    var x = noise(xoff) ;
    var y = noise(yoff);
  
   xoff += 10;
   yoff += 10;
  
    fill(203, 2, 2);
    strokeWeight(0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
    fill(243, 133, 14)
    strokeWeight(0);
    ellipse(this.pos.x+5, this.pos.y+5, 10, 10);
    fill(255, 228, 3)
    strokeWeight(0);
    ellipse(this.pos.x+10, this.pos.y+10, 10, 10);
    fill(16, 193, 7)
    strokeWeight(0);
    ellipse(this.pos.x+15, this.pos.y+15, 10, 10);
    fill(17, 74, 239)
    strokeWeight(0);
    ellipse(this.pos.x+20, this.pos.y+20, 10, 10);
    fill(30, 30, 158)
    strokeWeight(0);
    ellipse(this.pos.x+25, this.pos.y+25, 10, 10);
    fill(133, 10, 219)
    strokeWeight(0);
    ellipse(this.pos.x+30, this.pos.y+30, 10, 10);
  
  }
}