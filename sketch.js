let img;
let px=80;
let py=350;//팩맨 위치

function preload() {
  img = loadImage("Map.png"); //이미지 로드
}

function setup() {
  createCanvas(1408, 718);
  image(img, 0, 0, 1408, 718);
  
  
  

}

function draw() {

  background(3,9,65,255);
  drawWall();

  if (mouseIsPressed === true) {
    let c = get(mouseX, mouseY); 
    console.log(c);
    console.log(mouseX, mouseY);
  }

  fill(255,255,0);
  //arc(80,350,30,30,PI/4,PI*7/4);//팩맨
  arc(px,py,30,30,PI/4,PI*7/4);//팩맨
  if(keyIsDown(LEFT_ARROW))px-=3;
  if(keyIsDown(RIGHT_ARROW))px+=3;
  if(keyIsDown(UP_ARROW))py-=3;
  if(keyIsDown(DOWN_ARROW))py+=3;

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