/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  noStroke()
  angleMode(DEGREES)
  translate(width/2, height/2)
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  ellipseMode(CENTER)
  if(obj.hours < 8 || obj.hours > 20 ){
    background(20); //  dark
  }else{
    background(200); //  dark
  }


  fill(200); // dark grey

  let OpacityAm = 35;

  let blue  = color(140, 255, 251,OpacityAm)
  let purple = color(175, 133, 255,OpacityAm)

  let minForLerp = map( obj.minutes, 0, 59, 0,1)
  let colorOfOrb = lerpColor(blue,purple,minForLerp)

  let sizeStep = 15;
  let howManyCircles = map (obj.seconds, 0, 59, 20, 40)

  fill(colorOfOrb);
  for(let i = 0; i < howManyCircles; i++){
  ellipse(0, 0, sizeStep*i);
  }

  fill("#fae")
  ellipse(0,0, 50) // center 
  let theDate = Date();
  let dayOfTheWeek = theDate.split(" ")[0]
  let theMonth = theDate.split(" ")[1]
  let theYear = theDate.split(" ")[3]
    textSize(50)

  let ReadableHour = obj.hours; 
  let M = "AM"

  if(obj.hours == 0){
    ReadableHour = 12
    M = "AM"
  }

  if(obj.hours == 12){
     M = "NOON"
  }

  if(obj.hours > 12){
    ReadableHour = obj.hours - 12;
    M = "PM"
  }



  text(ReadableHour +M , -400,-150)

  let keepSleeping = color(102, 255, 0)
  let gottaWakeUpSoon = color(255, 242, 0)
  let getUpOrYoullBeLate = color(255, 0, 123);

  console.log(obj.seconds_until_alarm);
 if(obj.seconds_until_alarm < 0 || obj.seconds_until_alarm === undefined){
  fill(keepSleeping)

}
  else if(obj.seconds_until_alarm > 0){
fill(gottaWakeUpSoon)
  }
  else{
    fill(getUpOrYoullBeLate);
  }
  ellipse(-100,-100,100)

}


function drawTriangles(x,y,s){
fill(255)
 triangle(x,y,
          x+s/2,y+s,
          x-s/2, y+s )

triangle(x,y,
         x+s/2,y-s,
         x-s/2, y-s )

}  
