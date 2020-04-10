var th =.05
var sl
var c = 1
var by =[]
var a =0
var mic
var lyf=50
function mousePressed ()
{vel=-8
  }
function setup() {
  createCanvas(400, 400);
sl = createSlider(0,100,20)
  for (var i = 0 ; i<25;i++) 
{
by[i] = random(0,width)

}
mic  = new p5.AudioIn()
  mic.start()
}
var y=200
var vel = 0
var g  = .4

function jump()
{vel = -8
}

function  mousePresssed()
{vel= -8
}
function draw() {
th = sl.value()/1000
  background(0)
  text(lyf,10,10)
y+=vel
  vel+=g
 var vol = mic.getLevel();
  rect(0,y,20,vol*100)
  
  translate(0,a,0)
for( var k = 0 ;k<25;k++)
{if(k>0)
{ fill(255,0,0)
}
 rectMode(CENTER)
 text(k,by[k]+20,height -87*k+20)
 ellipse(by[k],height - 87*k,10,10)
fill(255)
 by[k]=by[k]+1;
  if(by[k]>width)
    by[k] = 0
  
} 
  if(y<0)
  { c+=1
     a=400*c
   y=400
 
  }
  else if(y>400)
  {
  c-=1
  a=400*(c)
   y=0
  }

if(vol>th)
 { vel=-20*vol
  }

for (var l =0;l<25;l++)
{var x1 = 200
 var x2 = by[l]
 var y2 = height - 87*l
 var y1 = y
if((x1-x2)*(x1-x2)+(y2-y1)*(y2-y1)<255)
 { 
   lyf--
  }
}
  ellipse(width/2,y,20,20)
}
