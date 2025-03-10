/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
// Variables
var bgC = "#141414";
var bezierY = -20;
var vertexX = 130;
var strokeDefault = 3;
var pendulumY = 420

function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
// House Keeping
  background(bgC); // a light black
  
  //Grandfather Clock GLOW
  beginShape();
    // Colours
  stroke(60, 0, 90, 90);
  strokeWeight(50);
  fill(bgC);
    //drawing
  vertex(380, 499);   // bottom left
  line(380, 400, 580, 399);
  vertex(580, 500);   // bottom right
  vertex(580, vertexX)    // top right
  bezierVertex(580, bezierY, 380, bezierY, 380, vertexX);   // top right
  vertex(380, vertexX);   // top left

  endShape(CLOSE);

  //Grandfather Clock
  beginShape();
    // Colours
  stroke("#9900FF");
  strokeWeight(strokeDefault);
  fill(bgC);
    //drawing
  vertex(380, 499);   // bottom left
  line(380, 400, 580, 399);
  vertex(580, 500);   // bottom right
  vertex(580, vertexX)    // top right
  bezierVertex(580, bezierY, 380, bezierY, 380, vertexX);   // top right
  vertex(380, vertexX);   // top left

  endShape(CLOSE);
  
  // Clock face
    // Outline
  stroke("#FFFF00");
  strokeWeight(strokeDefault);
  circle(480, 120, 160);
    // Hands
  stroke(252,48,50);
  strokeWeight(6);
  line(480,120, 480,46);

  // Clock Pendulum
  noStroke();
    // Tock
  fill(141, 242, 64);
  circle(480, pendulumY, 110);
    // Tick
  fill(77, 238, 234);
  circle(480, pendulumY, 40);
}
