// Variables
var clock = {
  x: 500,
  y: 250
}

// Update this function to draw you own maeda clock on a 960x500 canvas

function theClock(obj) {
  // Outline of the clock face
  stroke("#FFFF00");
  strokeWeight(10);
  fill(50)
  circle(clock.x, clock.y, 300);
  
  // Increments on the clock face
  stroke(240, 0, 255);
  strokeWeight(10);
  // 12 o'clock
  line(clock.x, 100, clock.x, 130);
  // 3 o'clock
  line(620, clock.y, 650, clock.y);
  // 6 o'clock
  line(clock.x, 400, clock.x, 370);
  // 9 o'clock
  line(350, clock.y, 380, clock.y);
  
  // Calculate hand angles
  let minuteAngle = map(obj.minutes + obj.seconds / 60, 0,60, 0,360)
  let hourAngle = map(obj.hours % 12 + obj.minutes / 60, 0,12, 0,360);
  
  // Draw hour hand
  drawHand(hourAngle, color(252, 48, 50), 13, 50);
  // Draw minute hand
  drawHand(minuteAngle, color(254, 140, 25), 10, 130);
  
  clockCenter(obj)
}
function drawHand(angle, handColour, lineWeight, handLength) {
  push();
  // Move the origin to the centre of the clock face
  translate(clock.x, clock.y);
  // Adjust rotation so 0° is at the top
  rotate(angle - 90);
  stroke(handColour);
  strokeWeight(lineWeight);
  line(0, 0, handLength, 0);
  pop();
}
function clockCenter(obj) {
  // Clock centre
  noStroke();
  fill("white");
  if (obj.seconds % 2 === 0) {
    // Tick – larger ball
    circle(clock.x, clock.y, 20);
  } else {
    // Tock – smaller ball
    circle(clock.x, clock.y, 10);
  }
}
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  angleMode(DEGREES);
  
  theClock(obj);
}
