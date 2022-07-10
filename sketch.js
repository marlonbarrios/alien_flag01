//Alien Flag 01
//https://marlonbarrios.github.io/organic-tube-noc1/

var w;

let recorder = [];

let lifeSpan = 1300;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // Make a Walker object
  w = new Walker();
  background(0)
  rect(0, height/3, width, height/3);
  frameRate(20);


}

function windowResised() {

  background(0)
    resizeCanvas(windowWidth, windowHeight);
    rect(0, height/3, width, height/3);
  
  }
  
 

function draw() {
 
 



  // Update and display object
  w.update();
  w.display();

}

function Walker() {

  // Random Creation in Space 
  this.pos = createVector(width/2, height/2);
  // Start with 0 velocity 
  this.vel = createVector(0.0);

  this.update = function() {
   
    var space = createVector(random(width), random(height));

    // Vector pointing from Walker to randon direction 
    this.acc = p5.Vector.sub(space, this.pos);
    // Setting the magnitude of that vector
    this.acc.setMag(0.2);

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    // Draw Walker as circle


  
   stroke (156, 9, 51)

  strokeWeight(1)
      ellipseMode(CENTER);
      fill( 20, 5);
      let size = lifeSpan - frameCount;
   
    // Perlin Noise to make it oooks more organic
        ellipse(this.pos.x, this.pos.y, noise(width -100) * size, noise(height - 150) * size);
        if(size == 0){
          noLoop();
        }

      
  }
}


