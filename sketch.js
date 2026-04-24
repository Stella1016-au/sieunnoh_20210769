let img;

function preload() {
  // 이미지를 미리 로딩합니다.
  img = loadImage("Map.png"); 
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);
}

function draw() {

}