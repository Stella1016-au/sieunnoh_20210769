let img;
let px=80;
let py=350;//팩맨 위치
let r = 12;//팩맨의 반지름
let dots = [];//콩들을 저장할 배열
let score = 0;//점수 변수

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
  {x: 1125, y: 510, w: 20, h: 75}, {x: 690, y: 0, w: 30, h: 125}
];

function preload() {
  //img = loadImage("Map.png"); //이미지 로드
}

function setup() {
  createCanvas(1408, 718);
  //image(img, 0, 0, 1408, 718);

  for(let x = 50; x<1408; x+=50){
    for(let y = 50; y<718; y+=50){
      if(!isColliding(x,y,10)){
        dots.push({x:x,y:y,eaten:false});
      }
    }
  }
}

function draw() {
  background(3,9,65,255);

  fill(255,255,0,255);
  noStroke();
  
  //1. 외곽벽 그리기
  for(let wall of walls){
    rect(wall.x,wall.y,wall.w,wall.h);
  }
  //움직일위치 = 현재위치
  let nextX = px;
  let nextY = py;
  
  //팩맨 움직임 구현
  if(keyIsDown(LEFT_ARROW))nextX-=3;
  if(keyIsDown(RIGHT_ARROW))nextX+=3;
  if(keyIsDown(UP_ARROW))nextY-=3;
  if(keyIsDown(DOWN_ARROW))nextY+=3;

  //2. 충돌하지 않으면, 계속이동한다.
  if(!isColliding(nextX,py,r)){
    px = nextX;
  }
  if(!isColliding(px, nextY, r)){
    py = nextY;
  }

  noStroke();
  fill(255,255,0,255);
  arc(px,py,r*2,r*2,PI/4,PI*7/4,PIE);//팩맨

  //콩그리기
  for(let d of dots){
    if(!d.eaten){
      fill(255,184,151);
      ellipse(d.x,d.y,6,6);

      let distToPacman = dist(px,py,d.x,d.y);
      if(distToPacman<r+3){
        d.eaten = true;
        score += 10;
      }
    }
  }

  fill(255);
  textSize(24);
  textAlign(LEFT,TOP);
  text("Score: "+score,50,40);

  if(px<0||px>1408){
    px=80;
    py=350;
  }

  if (mouseIsPressed === true) {
    let c = get(mouseX, mouseY); 
    console.log(c);
    console.log(mouseX, mouseY);
  }
 
}

///3. 충돌함수
function isColliding(nx,ny,r){
  for(let wall of walls){

    //범위내의 모든 점의 좌표를 반환
    let closestX = constrain(nx, wall.x, wall.x + wall.w);
    let closestY = constrain(ny, wall.y, wall.y + wall.h);

    //벽내부의 모든 점과 팩맨의 중심점 사이의 거리를 계산
    let d = dist(nx,ny,closestX,closestY);
    //충돌했다?==거리가 반지름보다 작다.
    if(d<r) return true;
  }
  return false;
  //false를 반환하면 충돌x. 따라서 계속 이동
}