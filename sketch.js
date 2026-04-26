let img;
let px=80;
let py=350;//팩맨 위치
let r = 15;//팩맨의 반지름

let walls = [
  // 외곽 테두리
  {x: 0, y: 0, w: 180, h: 320}, {x: 160, y: 240, w: 120, h: 80},
  {x: 0, y: 390, w: 200, h: 330}, {x: 180, y: 390, w: 100, h: 80},
  {x: 1220, y: 0, w: 188, h: 320}, {x: 1120, y: 240, w: 120, h: 80},
  {x: 1120, y: 390, w: 120, h: 80}, {x: 1210, y: 390, w: 300, h: 330},
  {x: 0, y: 0, w: 1408, h: 30}, {x: 0, y: 690, w: 1408, h: 40},

  // 내부 벽
  {x: 230, y: 80, w: 80, h: 45}, {x: 365, y: 80, w: 270, h: 45},
  {x: 770, y: 80, w: 270, h: 45}, {x: 1100, y: 80, w: 80, h: 45},
  {x: 230, y: 175, w: 80, h: 20}, {x: 345, y: 175, w: 135, h: 20},
  {x: 345, y: 175, w: 30, h: 90}, {x: 537, y: 170, w: 30, h: 165},
  {x: 430, y: 240, w: 210, h: 20}, {x: 615, y: 175, w: 175, h: 20},
  {x: 690, y: 175, w: 30, h: 85}, {x: 840, y: 170, w: 30, h: 165},
  {x: 765, y: 243, w: 210, h: 20}, {x: 923, y: 175, w: 140, h: 20},
  {x: 1030, y: 175, w: 35, h: 90}, {x: 1095, y: 175, w: 80, h: 20},
  {x: 375, y: 310, w: 105, h: 90}, {x: 620, y: 310, w: 170, h: 90},
  {x: 925, y: 310, w: 105, h: 90}, {x: 340, y: 445, w: 140, h: 20},
  {x: 537, y: 375, w: 30, h: 95}, {x: 620, y: 445, w: 170, h: 20},
  {x: 690, y: 445, w: 20, h: 80}, {x: 840, y: 375, w: 30, h: 95},
  {x: 925, y: 445, w: 140, h: 20}, {x: 260, y: 510, w: 20, h: 70},
  {x: 340, y: 510, w: 45, h: 110}, {x: 340, y: 510, w: 70, h: 20},
  {x: 260, y: 615, w: 380, h: 20}, {x: 532, y: 560, w: 30, h: 60},
  {x: 415, y: 565, w: 65, h: 20}, {x: 465, y: 510, w: 175, h: 20},
  {x: 620, y: 565, w: 170, h: 20}, {x: 690, y: 565, w: 20, h: 80},
  {x: 760, y: 510, w: 175, h: 20}, {x: 760, y: 615, w: 380, h: 15},
  {x: 845, y: 565, w: 20, h: 60}, {x: 920, y: 565, w: 65, h: 20},
  {x: 990, y: 510, w: 80, h: 20}, {x: 1010, y: 510, w: 60, h: 120},
  {x: 1125, y: 510, w: 20, h: 80}, {x: 690, y: 0, w: 30, h: 125}
];

function preload() {
  //img = loadImage("Map.png"); //이미지 로드
}

function setup() {
  createCanvas(1408, 718);
  //image(img, 0, 0, 1408, 718);
}

function draw() {
  background(3,9,65,255);
  drawWall();//외곽벽 그리기

  let nextX = px;
  let nextY = py;
  
  //팩맨 움직임 구현
  if(keyIsDown(LEFT_ARROW)) nextX-=3;
  if(keyIsDown(RIGHT_ARROW))nextX+=3;
  if(keyIsDown(UP_ARROW))nextY-=3;
  if(keyIsDown(DOWN_ARROW))nextY+=3;

  //충돌하지 않으면, 계속이동한다.
  if(!isColliding(px,py,r)){
    px = nextX;
    py = nextY;
  }

  fill(255,255,255,0);
  noStroke();
  for(let wall of walls){
    rect(wall.x,wall.y,wall.w,wall.h);
  }

  fill(255,255,0,255);
  arc(px,py,r*2,r*2,PI/4,PI*7/4);//팩맨

  if (mouseIsPressed === true) {
    let c = get(mouseX, mouseY); 
    console.log(c);
    console.log(mouseX, mouseY);
  }
 
}

function isColliding(nx,ny,r){
  for(let wall of walls){

    let closestX = constrain(nx, wall.x, wall.x + wall.w);
    let closestY = constrain(ny, wall.y, wall.y + wall.h);

    let d = dist(nx,ny,closestX,closestY);

    if(d<r) return true;
  }
  return false;
}

function drawWall(){
  //외곽테두리
  noStroke(); 
  // Fill(255,255,255,255);
  rect(0, 0, 180, 320);
  rect(160, 240, 120, 80);
  rect(0, 390, 200, 330);
  rect(180, 390, 100, 80);

  rect(1220, 0, 188, 320);
  rect(1120, 240, 120, 80);
  rect(1120, 390, 120, 80);
  rect(1210, 390, 300, 330);

  rect(0, 0, 1408, 30);
  rect(0, 690, 1408, 40);

  //내부 벽
  rect(230,80,80,45);
  rect(365,80,270,45);
  rect(770,80,270,45);
  rect(1100,80,80,45);

  rect(230,175,80,20);
  rect(345,175,135,20);
  rect(345,175,30,90);
  rect(537,170,30,165);
  rect(430,240,210,20);
  rect(615,175,175,20);
  rect(690,175,30,85);
  rect(840,170,30,165);
  rect(765,243,210,20);
  rect(923,175,140,20);
  rect(1030,175,35,90);
  rect(1095,175,80,20);

  rect(375,310,105,90);
  rect(620,310,170,90);
  rect(925,310,105,90);

  rect(340,445,140,20);
  rect(537,375,30,95);
  rect(620,445,170,20);
  rect(690,445,20,80);
  rect(840,375,30,95);
  rect(925,445,140,20);

  rect(260,510,20,70);
  rect(340,510,45,110);
  rect(340,510,70,20);
  rect(260,615,380,20);
  rect(532,560,30,60);
  rect(415,565,65,20);
  rect(465,510,175,20);
  rect(620,565,170,20);
  rect(690,565,20,80);
  rect(760,510,175,20);
  rect(760,615,380,15);
  rect(845,565,20,60);
  rect(920,565,65,20);
  rect(990,510,80,20);
  rect(1010,510,60,120);
  rect(1125,510,20,80);

  rect(690,0,30,125);

}