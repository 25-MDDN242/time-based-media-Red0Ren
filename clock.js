/*
 * Use p5.js to draw a clock on a 960x500 canvas
 */

// Global Variables
var bgC = "#141414";
var bezierY = -20;
var vertexX = 130;
var strokeDefault = 3;
var pendulumY = 420;
let colorScheme = {
  one: color(255),
  two: color(bgC)
}

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
function strobeLights(frameCount) {
  // variables
  let blinkSpeed = 5; // Lower = faster blink
  let isOn = floor(frameCount / blinkSpeed) % 2 === 0; // Toggle every `blinkSpeed` frames
  let pulseSpeed = 1; // Adjust for faster/slower pulsing
  let strobe = {
    d: 20,
    startY: 250,
    endY: 450
  };

  // Oscillate strobePos smoothly using sine function
  let strobePos = map(sin(frameCount * pulseSpeed), 0, 1, strobe.startY, strobe.endY);

  if (isOn) {
    stroke(141, 242, 64); // White lights on
  } else {
    stroke(bgC); // Lights off (black)
  }

  strokeWeight(strobe.d);

  for (let x = 50; x <= 905; x += 95) {
    line(x, strobe.startY, x, strobePos);
  }
}

// Grandfather Clock GLOW
function clockGlow(minWeight, maxWeight, transparency) {
  let pulseSpeed = 1; // Adjust for faster/slower pulsing

  // Oscillate strokeWeight smoothly using sine function
  let glowWeight = map(sin(frameCount * pulseSpeed), -1, 1, minWeight, maxWeight);

  beginShape();
  stroke(153, 0, 255, transparency);
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
  stroke(153, 0, 255);
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
  let minuteAngle = map(obj.minutes + obj.seconds / 60, 0, 60, 0, 360);
  let hourAngle = map(obj.hours % 12 + obj.minutes / 60, 0, 12, 0, 360);

  // Draw minute hand
  drawHand(minuteAngle, color(254, 140, 25), 3, 70);
  // Draw hour hand (using white as an example)
  drawHand(hourAngle, color(252, 48, 50), 4, 40);

  // Clock centre
  noStroke();
  fill(77, 238, 234);
  circle(480, 120, 5);
}

// Minute and Hour hands
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
  // ROD
  // rod Variables
  var rod = {
    min: 0,
    max:5,
    weight: 0
  }
  // Rod conditions
  if (obj.seconds < 10) {
    rod.weight = map(obj.seconds, 0, 9, rod.min, rod.max);
  } else if (obj.seconds >=10){
    rod.weight = map(obj.seconds, 10, 20, rod.max, rod.min);
    //  // Draw the rod
    //  stroke(254, 140, 25);
    //  strokeWeight(rod.weight);
    //  line(480, 420, 480, 210);
  } else {
    // After 20 seconds, set thickness to 0 (completely gone)
    rod.weight = 0;
  }
  
  // Draw the rod only if it has weight
  if (rod.weight > 0) {
    stroke(254, 140, 25);
    strokeWeight(rod.weight);
    line(480, 420, 480, 210);
  }
 
  // BALL
  noStroke();
  fill(77, 238, 234);
  // ball Variables
  var ball = {
    min: 40,
    max: 100,
    size: 40
  }
  let modSec2 = obj.seconds % 2; // large when even, small when odd

  // Ball conditions
  if (modSec2 > 0) {
    ball.size = map(obj.millis, 0, 999, ball.max, ball.min);

  } else {
    ball.size = map(obj.millis, 0, 999, ball.min, ball.max);
  }
  // Draw ball
  circle(480, pendulumY, ball.size);
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
  if (obj.seconds_until_alarm < 0 || obj.seconds_until_alarm === undefined) {
    // alarm not set
  } else if (obj.seconds_until_alarm > 0) {
    // alarm set
    clockGlow(3, 80, 20); // Phase III
    clockGlow(3, 50, 40); // Phase II
    clockGlow(3, 30, 70); // Phase I
  } else if (obj.seconds_until_alarm == 0) {
    // alarm is going off
    strobeLights(frameCount);
  }

  // Draw the clock elements
  grandfatherClock();
  clockFace(obj);
  drawPendulum(obj);
}
