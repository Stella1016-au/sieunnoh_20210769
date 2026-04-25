let px,py;
let pd = 30;

let dx = [100,200,300,400,500];
let dy = [150,250,350,450,550];
let dSize = 15;
let dActive = [true,true,true,true,true];

let score = 0;

function setup(){
  createCanvas(600,400);
  px = width/2;
  py = height/2;
}

function draw(){
  background(30);

  if(keyIsDown(LEFT_ARROW)) px-=3;
  if(keyIsDown(RIGHT_ARROW)) px+=3;
  if(keyIsDown(UP_ARROW)) py-=3;
  if(keyIsDown(DOWN_ARROW)) py+=3;

  fill(255,255,0);
  ellipse(px,py,pd);//팩맨 본체

  for(let i = 0; i<5; i++){
    if(dActive[i]===true){
      fill(255,100,100);
      ellipse(dx[i],dy[i],dSize);
   

  let distance = dist(px,py,dx[i],dy[i]);

  if(distance<(pd/2)+(dSize/2)){
    dActive[i]=false;
  }
   }
  }


}