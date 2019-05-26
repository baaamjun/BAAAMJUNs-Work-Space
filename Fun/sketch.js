let ball = [];

function setup() {
  createCanvas(400, 400);
 for (var i = 0; i < 30; i++) {    
   ball[i] = new Particle();
  }
}


function draw() {
  background(255, 50);

  for(var i = 0; i < 30; i++)
  {
    gravity = createVector(random(-0.1, 0.1), random(-0.01, 1));
   ball[i].addForce(gravity);
   wind = createVector(random(-0.1, 0.1), random(0, 0.1));
   ball[i].addForce(wind);
    
    
  if(mouseIsPressed){
    ball[i].hold();
  }
      ball[i].update();
      ball[i].show();
  }

}



