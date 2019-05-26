let rain = [];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 100; i++){
 rain[i] = new Rain();
 }
}

function draw() {
  background(10, 50);
  
  noStroke();
  fill(250, 50)
  rect(0, 0, 100, 400);
   for(var i = 0; i < 1; i++){
   gravity = createVector(0, 1);
   rain[i].addForce(gravity);
     
     rain[i].update();
     rain[i].show();
     rain[i].show2();
   }
  
   noStroke();
   fill(200, 40)
   rect(100, 0, 100, 400);
   for(var i = 0; i < 3; i++){
   gravity = createVector(0, 1);
   rain[i].addForce(gravity);
     
   rain[i].update();
   rain[i].show2();
   }
  
  noStroke();
   fill(150, 30)
   rect(200, 0, 100, 400);
   for(var i = 0; i < 9; i++){
   gravity = createVector(0, 1);
   rain[i].addForce(gravity);
     
   rain[i].update();
   rain[i].show3();
   }
  noStroke();
   fill(100, 20)
   rect(300, 0, 100, 400);
   for(var i = 0; i < 27; i++){
   gravity = createVector(0, 1);
   rain[i].addForce(gravity);
     
   rain[i].update();
   rain[i].show4();
   }
}