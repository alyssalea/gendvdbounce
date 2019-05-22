var x = 745
var y = 255
var xspeed = 3
var yspeed = 3
function preload () {
  bluelogo = loadImage("logo/dvdlogoblue.png")
  yellowlogo = loadImage("logo/dvdlogoyellow.png")
  purplelogo = loadImage("logo/dvdlogopurple.png")
  pinklogo = loadImage("logo/dvdlogopink.png")
  orangelogo = loadImage("logo/dvdlogoorange.png")
}
function setup() {
  createCanvas(1200,612)
}

function draw() {
  background(1200,612)
  fill(0,0,0);
  image(bluelogo,0,0);
  rect(x,y,120,80)
  fill(0,0,0);
  

  if (x > width-120){
  xspeed = -5
  tint(255,255,0);
  }
  
  if (0 > x){
  xspeed = 5
  tint(0,0,255)
  }
  
  if (y > height-84){
  yspeed = -3
  tint(255,0,255)
  }
  
  if (0 > y){
  yspeed = 3
  tint(255,165,0)
  }

  x = x + xspeed
  y = y + yspeed
}