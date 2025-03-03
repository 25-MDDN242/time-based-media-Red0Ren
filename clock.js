/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
// Variables
var bgC = "#141414";

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
  
  //Grandfather Clock
  beginShape();
    // House Keeping
  stroke("#FF0000");
  fill(bgC);
    //drawing
  vertex(380, 499);
  vertex(580, 500);
  vertex(580, 200);
  vertex(380, 200);

  endShape(CLOSE);
}
