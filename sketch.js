var hr,mn,se;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
 
 background(0);
 translate(200,200);
 rotate(-90)
 hr=hour()
 mn=minute()
se=second()
seangle=map(se,0,60,0,360);
mnangle=map(mn,0,60,0,360);
hrangle=map(hr%12,0,12,0,360);
push(); rotate(seangle); stroke(255,0,0); strokeWeight(7); line(0,0,100,0); pop()
push(); rotate(mnangle); stroke(123,158,56); strokeWeight(7); line(0,0,75,0); pop()
push(); rotate(hrangle); stroke(255,50,150); strokeWeight(7); line(0,0,50,0); pop()
noFill()
stroke(255,0,0);
arc(0,0,300,300,0,seangle);
stroke(255,50,123);
arc(0,0,280,280,0,mnangle);
stroke(5,55,105);
arc(0,0,260,260,0,hrangle);


  drawSprites();
}