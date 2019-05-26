class Rain {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(255);
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    fill(this.c);
    stroke(255);
    ellipse(random(0,100), random(0, height), 0.001, random(5, 30));
  }
   show2() {
    fill(this.c);
    stroke(255);
    ellipse(random(100,200), random(0, height), 0.001, random(5, 30));
  }
  show3() {
    fill(this.c);
    stroke(255);
    ellipse(random(200,300), random(0, height), 0.001, random(5, 30));
  }
  show4() {
    fill(this.c);
    stroke(255);
    ellipse(random(300,400), random(0, height), 0.001, random(5, 30));
  }
}
