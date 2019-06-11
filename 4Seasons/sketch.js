// 나무 구조 //
let system;
let system2;
let system3;
let system4;
let system5;
let system6;
// 6가지 나뭇잎 파티클 변수 선언
let img;
// 나뭇가지 이미지 변수 선언
function preload() {
  img = loadImage('Tree.png');  // 나뭇가지
}
function setup() {
  createCanvas(720, 400);
  
  system = new ParticleSystem(createVector(width / 2, 100)); // 나뭇잎1
  
   system2 = new ParticleSystem(createVector(width / 2 - 50, 150)); // 나뭇잎2
  
   system3 = new ParticleSystem(createVector(width / 2, 150)); // 나뭇잎3
  
   system4 = new ParticleSystem(createVector(width / 2 + 50, 150)); // 나뭇잎4
  
   system5 = new ParticleSystem(createVector(width / 2 - 25, 200)); // 나뭇잎5
  
   system6 = new ParticleSystem(createVector(width / 2 + 25, 200)); // 나뭇잎6
}
let e = 255;
let f = 255;
let g = 255;  
// 배경의 R, G, B 값
function draw() {
  background(e, f, g);  
  
  image(img, 285, 50, 150, 250);
  
  system.addParticle();
  system.run(); 
  // 나뭇잎1 파티클
  
  system2.addParticle();
  system2.run();
  // 나뭇잎2 파티클
  
  system3.addParticle();
  system3.run();
  // 나뭇잎3 파티클
  
  system4.addParticle();
  system4.run();
  // 나뭇잎4 파티클
  
  system5.addParticle();
  system5.run();
  // 나뭇잎5 파티클
  
  system6.addParticle();
  system6.run();
  // 나뭇잎6 파티클
}
// 나무 구조 //

// 바람 표현 //
let a = -1; // 왼쪽 방향
let b = 1; // 오른쪽 방향
let c = -1; // 위쪽 방향
let d = 0.5; // 아래쪽 방향
// 바람의 4 방향 변수 선언
let Particle = function(position) {
  this.acceleration = createVector(random(-0.01, 0.01), random(0, 0.01));
  this.velocity = createVector(random(a, b), random(c, d)); // 바람의 방향 변수를 통해 설정
  this.position = position.copy();
  this.lifespan = 300;
};
// 바람 표현 //

// 각 구역별 계절 연출하기 //
Particle.prototype.run = function() {
  
  if(mouseX < width/2 && mouseY < height/2)
  { // 마우스가 좌측상단일때
    
    e = 255;
    f = 205;
    g = 247; // 봄 분홍색 배경
    
    if(mouseIsPressed)
    {
      d = 3;  // 벚꽃이 밑으로 떨어지도록
    }
    else
    {
     a = -1;
     b = 1;
     c = -1;
     d = 0.5;  // 원상복귀
    }
   this.update();
   this.displaySpring(); // 봄 나뭇잎 
  }
  else if(mouseX > width/2 && mouseY < height/2)
  { // 마우스가 우측상단일때
    
    e = 197;
    f = 254;
    g = 195;  // 여름 초록색 배경
    
    if(mouseIsPressed)
    {
      a = -1.5;
      b = 1.5;
      c = -1.5;
     d = 0.75;// 상록수가 좀 더 풍성해지도록
    }
    else
    {
     a = -1;
     b = 1;
     c = -1;
     d = 0.5;  // 원상복귀
    }
    this.update();
   this.displaySummer(); // 여름 나뭇잎
  }
  else if(mouseX > width/2 && mouseY > height/2)
  { // 마우스가 우측하단일때
    
    e = 254;
    f = 216;
    g = 195;  // 가을 갈색 배경
    
    if(mouseIsPressed)
    {
       a = -2;
       b = 0.5;
       c = -0.5;
       d = 1.5;  // 단풍잎이 바람때문에 자연스레 떨어지도록
    }
    else
    {
     a = -1;
     b = 1;
     c = -1;
     d = 0.5;  // 원상복귀
    }
    this.update();
   this.displayAutumn(); // 가을 나뭇잎
  }
  else if(mouseX < width/2 && mouseY > height/2)
  { // 마우스가 좌측하단일때
    
    e = 235;
    f = 248;
    g = 250;  // 겨울 하늘색 배경
    
    if(mouseIsPressed)
    {
     a = -4;
     b = 4;
     c = -4;
     d = 4;  // 온 세상에 눈보라가 몰아치도록
    }
    else
    {
     a = -1;
     b = 1;
     c = -1;
     d = 0.5;  // 원상복귀
    }
    this.update();
   this.displayWinter(); // 겨울 나뭇잎
  }
};
// 각 구역별 계절 연출하기 //

// 계절별 나뭇잎 시각적 표현 // 
Particle.prototype.displaySpring = function() {
  stroke(244, 150, 255, this.lifespan);
  strokeWeight(2);
  fill(234, 47, 179, this.lifespan);
  arc(this.position.x+5, this.position.y-15, 15, 15, 0, PI + QUARTER_PI);  // 봄 나뭇잎 (벚꽃)
};
Particle.prototype.displaySummer = function() {
  stroke(50, 214, 29, this.lifespan);
  strokeWeight(2);
  fill(18, 170, 11, this.lifespan);
  square(this.position.x-5, this.position.y-20, 15, 20); // 여름 나뭇잎 (상록수)
};
Particle.prototype.displayAutumn = function() {
  stroke(217, 77, 40,  this.lifespan);
  strokeWeight(3);
  fill(244, 137, 32, this.lifespan);
  triangle(this.position.x, this.position.y-24, this.position.x + 9, this.position.y-12, this.position.x -9, this.position.y-12); // 가을 나뭇잎 (단풍)
};
Particle.prototype.displayWinter = function() {
  stroke(33, 154, 239, this.lifespan);
  strokeWeight(1.5);
  fill(255, this.lifespan);
  rect(this.position.x-5, this.position.y-20, 10, 10); // 겨울 나뭇잎 (눈)
};
// 계절별 나뭇잎 시각적 표현 // 

// 나무의 형태를 유지하기 위한 파티클 //
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
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 4;
};
// 나무의 형태를 유지하기 위한 파티클 //
