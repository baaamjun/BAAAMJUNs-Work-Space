class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
   
    this.w = random(1,20);
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }


  checkEdge() {
   if((this.pos.x > width) || (this.pos.x < 0))
    {
      this.vel.x = this.vel.x * -1;
    }
    
    if((this.pos.y > height) || (this.pos.y < 0))
    {
      this.vel.y = this.vel.y * -1;
    }
  }
  
  hold(){
    this.pos.x = mouseX;
    this.pos.y = mouseY;
    this.acc.set(0, 0);
  }
  

  show() {
    fill(random(1, 255), random(1, 255), random(1, 255));
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
  
}
