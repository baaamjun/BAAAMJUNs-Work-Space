var follow = [];

var s;

function setup() {
  createCanvas(400, 400);
  s = new Center();
  
  for(let i = 0; i < height; i++) {
  follow[i] = new followStar();
  }
}

function draw() {
  background(3, 5, 78, 50);

   for(let i = 0; i < height; i++)
   {follow[i].display();
    follow[i].update();
   }
  s.display();
}

function Center()
{
  this.display = function()
  { 
    translate(mouseX, mouseY);
    rotate(frameCount / 50.0);
    fill(245, 226, 54);
    star(0, 0, 48, 112, 5);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function followStar()
{
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  stroke(255);
  fill(255);
  
  this.update = function()
  {
   var mouse = createVector(mouseX, mouseY);
   this.acc = p5.Vector.sub(mouse, this.pos);

   this.acc.setMag(0.01);
    
   this.vel.add(this.acc);
   this.pos.add(this.vel);
  }

   this.display = function()
  { 
   stroke(255);
   fill(255);
   star(this.pos.x, this.pos.y, 3, 7, 5);
   }
}
  





