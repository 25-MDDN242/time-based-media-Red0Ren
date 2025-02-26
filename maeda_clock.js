// Variables
var dot = {
  size: 15

}

// Update this function to draw you own maeda clock on a 960x500 canvas
function numberOne(posX){
  
  // Colour
  fill(255,255, 255);

  // dots
  circle(posX, 200, dot.size);
  circle(posX, 217, dot.size);
  circle(posX, 234, dot.size);
  circle(posX, 251, dot.size);
  circle(posX, 268, dot.size);
  circle(posX, 285, dot.size);
  circle(posX, 302, dot.size);
  circle(posX, 319, dot.size);
  circle(posX, 336, dot.size);
  circle(posX, 353, dot.size);
}

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
  // Canvas
  rect(width/4, height/4, 500, 300);
  
  // 11
  numberOne(300);
  numberOne(380);
  // 2
  fill(255, 0, 0);
  circle(500, 200, dot.size);
}
