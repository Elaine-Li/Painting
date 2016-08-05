var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function circle(x, y, diameter){
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(640,480);
  background(250);
}

function draw() {
  fill(myRed, myGreen, myBlue);
  noStroke();
  circle(mouseX, mouseY, 10);
  
  myRed = myRed + 0.5;
  if (myRed > 255){
    myRed = 0;
  }
  myBlue = myBlue - 1;
  if (myBlue <= 0){
    myBlue = 255;
  }
  
}