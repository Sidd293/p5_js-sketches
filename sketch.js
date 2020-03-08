//cac = 1
w=400
lvl = 4
levl = 0
t = 0
x = 0
y = 0
xe = 200
ye = 200

f = -1

function setup() {
  St = minute()
  createCanvas(400, 400);
}

function mousePressed() {
  f = -f

}

function draw() {
  
levl=(lvl-4)/.5
  background(166, x, y);
  rect(0,0,w,10)
  text('level-' + levl, 30, 30)
 //If If If If If If If If 
  if (f == -1) {
    x = x + lvl * cos(t)
    y = y + lvl * sin(t)
  } else if (f == 1) {
    x = x + lvl * cos(t)
    y = y + lvl * sin(t)
    t = t + .04
  }
  ellipse(x, y, 10, 10)

  if (x > 400)
    x = 0
  if (x < 0)
    x = 400
  if (y > 400)
    y = 10
  if (y < 10)
    y = 400
  if ((x - xe) * (x - xe) + (y - ye) * (y - ye) < 1600) {

    lvl = lvl + 0.5
    xe = random(0, 400)
    ye = random(10, 400)

  }
  if (w<0)
    exit()

  ellipse(xe, ye, 30, 30)
  if (St == St + 1)
    Rect(0, 0, 200, 200)
  w=w-.1

}
