let planets = [];
let stars = [];

let StarS = 1;

let SunS = 80;
let EarthS = 12;
let ZandarS = 15;
let TitanS = 19;
let EgoS = 27;
let SakaarS = 25;

function setup() {
  
    createCanvas(700, 700);
    createStars();
    planets.push(new Sun());
    planets.push(new Earth());
    planets.push(new Zandar());
    planets.push(new Titan());
    planets.push(new Ego());
    planets.push(new Sakaar());
}

function draw() {
  
        background(20, 150);
        var sun = planets[0];

        for(var i=0;i<stars.length;i++){
            stars[i].show();
        }

        planets[0].show();

        for(var i=1;i<planets.length;i++){
            planets[i].update(sun);
            planets[i].show();
        }
  
       if(mouseIsPressed){
         StarS = 500;
         SunS = random(100, 700);
    
         EarthS = 0;
         ZandarS = 0;
         TitanS = 0;
         EgoS = 0;
         SakaarS = 0;
         }
       else {
         StarS = 1;
         SunS = 80;

         EarthS = 12;
         ZandarS = 15;
         TitanS = 19;
         EgoS = 27;
         SakaarS = 25;
         }
}

function Star() {
  
    this.show = function(){
        fill(255);
        stroke(255);
        strokeWeight(1);
        ellipse(random(0, width), random(0, height), StarS, StarS);
    }
}

function createStars() {
    for(var i=0;i<20;i++){
        stars.push(new Star());
    }
}

function Sun() {
    this.position = createVector(width/2, height/2);
  
    this.update = function(sun){
        this.acceleration = p5.Vector.sub(sun.position, this.position);
        this.acceleration.x = this.acceleration.x/this.gravity;
        this.acceleration.y = this.acceleration.y/this.gravity;

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        }
  
    this.show = function(){
        fill(random(240, 255), random(200, 225), random(30, 255));
        ellipse(this.position.x,this.position.y, SunS, SunS);
       }
}

function Earth() {
  
    this.position = createVector(width/2+2*width/20, height/2);

    this.distance = p5.Vector.sub(createVector(width/2, height/2), this.position);
    this.gravity = Math.sqrt(Math.pow(this.distance.x,2)+Math.pow(this.distance.y,2))*20;
  
    this.velocity = createVector(0, 3);
    
    this.update = function(sun){
        this.acceleration = p5.Vector.sub(sun.position, this.position);
        this.acceleration.x = this.acceleration.x/this.gravity;
        this.acceleration.y = this.acceleration.y/this.gravity;

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    this.show = function(){
        fill(164, 300, 100);
        ellipse(this.position.x, this.position.y, EarthS, EarthS);
    }
}

function Zandar() {
    this.position = createVector(width/2+4*width/20, height/2);
    
    this.distance = p5.Vector.sub(createVector(width/2, height/2), this.position);
    this.gravity = Math.sqrt(Math.pow(this.distance.x,2)+Math.pow(this.distance.y,2))*20;
    
    this.velocity = createVector(0, -2);
    
    this.update = function(sun){
        this.acceleration = p5.Vector.sub(sun.position, this.position);
        this.acceleration.x = this.acceleration.x/this.gravity;
        this.acceleration.y = this.acceleration.y/this.gravity;

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    this.show = function(){
        fill(34, 237, 230);
        ellipse(this.position.x,this.position.y, ZandarS, ZandarS);
    }
}

function Titan() {
    this.position = createVector(width/2+6*width/20, height/2);
    
    this.distance = p5.Vector.sub(createVector(width/2, height/2), this.position);
    this.gravity = Math.sqrt(Math.pow(this.distance.x,2)+Math.pow(this.distance.y,2))*20;
    
    this.velocity = createVector(0, 4);
    
    this.update = function(sun){
        this.acceleration = p5.Vector.sub(sun.position, this.position);
        this.acceleration.x = this.acceleration.x/this.gravity;
        this.acceleration.y = this.acceleration.y/this.gravity;

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    this.show = function(){
        fill(207, 40, 255);
        ellipse(this.position.x,this.position.y, TitanS, TitanS);
        
    }
}

function Ego() {
    this.position = createVector(width/2+8*width/20, height/2);
    
    this.distance = p5.Vector.sub(createVector(width/2, height/2), this.position);
    this.gravity = Math.sqrt(Math.pow(this.distance.x,2)+Math.pow(this.distance.y,2))*20;
    
    this.velocity = createVector(0, -3);

    this.update = function(sun){
        this.acceleration = p5.Vector.sub(sun.position, this.position);
        this.acceleration.x = this.acceleration.x/this.gravity;
        this.acceleration.y = this.acceleration.y/this.gravity;

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    this.show = function(){

        fill(237, 127, 20);
        ellipse(this.position.x,this.position.y, EgoS, EgoS);
    }
}

function Sakaar() {
    this.position = createVector(width/2+9*width/20, height/2);
    
    this.distance = p5.Vector.sub(createVector(width/2, height/2), this.position);
    this.gravity = Math.sqrt(Math.pow(this.distance.x,2)+Math.pow(this.distance.y,2))*20;
    
    this.velocity = createVector(0, 4);
    
    this.update = function(sun){
        this.acceleration = p5.Vector.sub(sun.position, this.position);
        this.acceleration.x = this.acceleration.x/this.gravity;
        this.acceleration.y = this.acceleration.y/this.gravity;

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    this.show = function(){
      
        fill(247, 96, 96);

        ellipse(this.position.x,this.position.y, SakaarS, SakaarS);
    }
}


