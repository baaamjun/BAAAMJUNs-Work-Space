let ball = [];

let img1;
let img2;

function preload() {
  img1 = loadImage('Eye.png');  
  img2 = loadImage('Grab.png');  
}

function setup() {
  createCanvas(400, 400);
 for (var i = 0; i < 50; i++) {    
   ball[i] = new Particle();
  }
}


function draw() {
  background(255, 217, 4, 50);
  
  image(img1, mouseX, mouseY, 100, 100);

  for(var i = 0; i < 30; i++)
  {
    gravity = createVector(random(-0.1, 0.5), random(-0.5, 0.5));
   ball[i].addForce(gravity);
   wind = createVector(random(-0.1, 0.1), random(0, 0.1));
   ball[i].addForce(wind);
    
    
  if(mouseIsPressed){
    ball[i].carrying();
     image(img2, mouseX-50, mouseY-50, 100, 100);
  }
      ball[i].update();
      ball[i].show();
  }

}



