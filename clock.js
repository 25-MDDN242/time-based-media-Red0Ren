/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
// Variables
var bgC = "#141414";
var bezierY = -20;
var vertexX = 130;
var strokeDefault = 3;
var pendulumY = 420
var oSeconds = obj.seconds

// Functions
//Grandfather Clock GLOW
function clockGlow() {
  beginShape();
  // Colours
  stroke(60, 0, 90, 35);
  strokeWeight(90);
  fill(bgC);
  //drawing
  vertex(380, 499);   // bottom left
  // line(380, 400, 580, 399);
  vertex(580, 500);   // bottom right
  vertex(580, vertexX)    // top right
  bezierVertex(580, bezierY, 380, bezierY, 380, vertexX);   // top right
  vertex(380, vertexX);   // top left

  endShape(CLOSE);
}
//Grandfather Clock
function grandfatherClock() {
  beginShape();

  // Colours
  stroke(60, 0, 90);
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
}
// Clock Face
function clockFace() {
  // Outline
  stroke("#FFFF00");
  strokeWeight(strokeDefault);
  circle(480, 120, 160);
  // Increments
  stroke(240,0,255);
  strokeWeight(4);
  // 12
  line(480, 60, 480, 40);
  // 3
  line(540, 125, 560, 125);
  // 6
  line(480, 180, 480, 200);
  // 9
  line(400, 120, 420, 120);

  // Hour Hand
  // stroke(252, 48, 50);
  // strokeWeight(6);
  // line(480, 120, 480, 46);
}

// Clock Pendulum
function drawPendulum(obj) {
  // pendulumm rod
  if (obj.minutes++) {
    if (obj.seconds < 20) {
      // Draw the line if seconds are less than 30
      // line
      stroke(254, 140, 25);  // Line color
      line(480, pendulumY, 480, 210);  // Draw line
      // line glow
      stroke(254, 140, 25, 35);  // glow color/transparence
      strokeWeight(20);
      line(480, pendulumY, 480, 210);  // Draw line
    } 
    else {
      // "Erase" the line by drawing over it with the background color if seconds are greater than 30
      stroke(bgC);  // Set the color to the background color to "erase"
      line(480, pendulumY, 480, 210);  // Redraw line over the existing one
    }
  }

  // pendulum ball
  noStroke();
  if (obj.seconds % 2 === 0) {
    // Tick
    fill(141, 242, 64);
    circle(480, pendulumY, 110);
  } else {
    // Tock
    fill(77, 238, 234);
    circle(480, pendulumY, 40);
  }
}

// Main Drawing Function
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

  // Drawing clock
  clockGlow();
  grandfatherClock();
  clockFace();
  drawPendulum(obj);
}