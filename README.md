[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18378652&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README
Tay_Renfred_Clock
Author: Renfred Tay
Purpose: to create a functional clock with alarms using p5js
Inspiration: Black light/neon aesthetic.
A description of your overall design process that serves as your design journal (suggested: 300-600 words)


    Design Process
Update this file as you go along to record your progress.
25/02/25
Edited sketch.jpg to a basic idea of what I want to achieve.
- sketch based on grandfather clock, simmplified to flashing lights.

11/03/25
Added static animations for minutes and seconds
Needed
- Hour and minute hands 
    - include their functionality
- Add real animations to everything.

12/03/25
Added "12, 3, 6, 9" indicators to the clock

13/03/25
1200
 - Added functionality to clock face and hands
 - ChatGPT helped with:
    1. Global Variables & Uninitialised Objects:
        - "var oSeconds = obj.seconds" has been removed.
        -  Missing semicolons have been added for consistency. 
    2. line() in beginShape() removed
    3. Parameter Handling:
        - In clockFace(), you were referencing obj without accepting it as a parameter. Function modified to accept "obj" so that time values are accessible.
    4. Typographical Errors:
        - (strokkeWeight) has been corrected to strokeWeight.
    5. Pendulum Drawing Logic:
        - Replaced (obj.minutes++) it with a condition based solely on the seconds value.
    6. Hand Angle Calculations:
        - In minuteAngle: obj.sconds has been corrected to obj.seconds
        - In hourAngle: range changed to 0–12 and maps it to 0-360°.
        - drawHand() function now uses translate() so that the hands rotate about the clock centre, and the rotation is offset by 90° (since 0° in p5.js is along the positive x-axis).

18/03/25
0000
 - Got rid of Colour variables since they were breakingthe code
1019
 - Glowing effect added to "Alarm Set"
    - ChatGPT helped with:
        1. adding the pulseSpeed, minWeight, maxWeight, glowWeight
        2. Taught me about sin() and frameCount
 - played around with sin(), pulse, minWeight, maxWeight, glowWeight

19/03/25
2359
Progress:
- added alarm and functions

ChatGPT Helped with:
- blinking strobe lights in a way that doesn't use "function draw(){}"

Odd Thing:
- I want to make a first step towards something bigger, so I reused some code from this code, and it ended up doing the "something bigger" immediately.

20/03/25
1030
- animated ball, with help from Phoebe Zeller
Next
- Animate rod disappearing/reappearing


    Artist Statement
I am a [blank]
I made [blank]
My artwork looks like [blank]
I make (line 2) because of [blank]
