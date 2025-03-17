/*
 * Use p5.js to draw a clock on a 960x500 canvas
 */

// Global Variables
var bgC = "#141414";
var bezierY = -20;
var vertexX = 130;
var strokeDefault = 3;
var pendulumY = 420;
// Colour RGB
/*
neon Pink =     color(240, 0, 255)
neon Red =      color(252, 48, 50)
neon Orange =   color(254, 140, 25)
neon Yellow =   color(255, 255, 0)
neon Green =    color(141, 242, 64)
neon Cyan =     color(77, 238, 234)
neon Blue =     color(51, 75, 255)
neon Purple =   color(153, 0, 255)
*/

// Alarm
function alarmLights() {
  
}

// Grandfather Clock GLOW
function clockGlow(obj) {
  let pulseSpeed = 0.5; // Adjust for faster/slower pulsing
  let minWeight = 20; // Minimum glow thickness
  let maxWeight = 80; // Maximum glow thickness

  // Oscillate strokeWeight smoothly using sine function
  let glowWeight = map(sin(frameCount * pulseSpeed), -1, 1, minWeight, maxWeight);

  beginShape();
  stroke(60, 0, 90, 80);
  strokeWeight(glowWeight); // Dynamic stroke weight
  fill(bgC);

  vertex(380, 499);   // bottom left
  vertex(580, 500);   // bottom right
  vertex(580, vertexX);    // top right
  bezierVertex(580, bezierY, 380, bezierY, 380, vertexX);   // top curve
  vertex(380, vertexX);   // top left

  endShape(CLOSE);
}

// Grandfather Clock Body
function grandfatherClock() {
  beginShape();
  stroke(153, 0, 255);
  strokeWeight(strokeDefault);
  fill(bgC);
  // Construct shape using vertices (avoid using line() inside beginShape/endShape)
  vertex(380, 499);   // bottom left
  vertex(580, 500);   // bottom right
  vertex(580, vertexX);    // top right
  bezierVertex(580, bezierY, 380, bezierY, 380, vertexX);   // top curve
  vertex(380, vertexX);   // top left
  endShape(CLOSE);
}

// Clock Face – now accepts obj to access time values
function clockFace(obj) {
  // Outline of the clock face
  stroke("#FFFF00");
  strokeWeight(strokeDefault);
  circle(480, 120, 160);
  
  // Increments on the clock face
  stroke(240, 0, 255);
  strokeWeight(4);
  // 12 o'clock
  line(480, 60, 480, 40);
  // 3 o'clock
  line(540, 120, 560, 120);
  // 6 o'clock
  line(480, 180, 480, 200);
  // 9 o'clock
  line(400, 120, 420, 120);
  
  // Calculate hand angles
  let minuteAngle = map(obj.minutes + obj.seconds / 60, 0,60, 0,360);
  let hourAngle = map(obj.hours % 12 + obj.minutes / 60, 0,12, 0,360);
  
  // Draw minute hand
  drawHand(minuteAngle, color(254, 140, 25), 3, 70);
  // Draw hour hand (using white as an example)
  drawHand(hourAngle, color(252, 48, 50), 4, 40);
  
  // Clock centre
  noStroke();
  fill("white");
  circle(480, 120, 5);
}

function drawHand(angle, handColour, lineWeight, handLength) {
  push();
  // Move the origin to the centre of the clock face
  translate(480, 120);
  // Adjust rotation so 0° is at the top
  rotate(angle - 90);
  stroke(handColour);
  strokeWeight(lineWeight);
  line(0, 0, handLength, 0);
  pop();
}

// Clock Pendulum
function drawPendulum(obj) {
  // Draw the pendulum rod
  if (obj.seconds < 20) {
    // Draw the rod if seconds are less than 20
    stroke(254, 140, 25);
    strokeWeight(2);
    line(480, pendulumY, 480, 210);
    // Draw rod glow
    stroke(254, 140, 25, 35);
    strokeWeight(20);
    line(480, pendulumY, 480, 210);
  } else {
    // Erase the rod by drawing it in the background colour
    stroke(bgC);
    strokeWeight(2);
    line(480, pendulumY, 480, 210);
  }
  
  // Draw the pendulum ball with differing sizes for "tick" and "tock"
  noStroke();
  fill(77, 238, 234);
  if (obj.seconds % 2 === 0) {
    // Tick – larger ball
    circle(480, pendulumY, 110);
  } else {
    // Tock – smaller ball
    circle(480, pendulumY, 40);
  }
}

// Main Drawing Function
function draw_clock(obj) {
  /* 
    The obj parameter should contain:
      obj.hours (0-23)
      obj.minutes (0-59)
      obj.seconds (0-59)
      obj.millis (0-999)
      obj.seconds_until_alarm: 
         < 0 if no alarm is set,
         = 0 if the alarm is going off,
         > 0 for the number of seconds until the alarm.
  */
  
  // Clear the canvas and set angle mode
  background(bgC);
  angleMode(DEGREES);
  
  
  // Alarm
  if(obj.seconds_until_alarm < 0 || obj.seconds_until_alarm === undefined){
    // alarm not set
  }else if(obj.seconds_until_alarm > 0) {
    // alarm set
    clockGlow(obj);
  }else if (obj.seconds_until_alarm == 0){
    // alarm is going off

  }
  // Draw the clock elements
  // clockGlow();
  grandfatherClock();
  clockFace(obj);
  drawPendulum(obj);
}
