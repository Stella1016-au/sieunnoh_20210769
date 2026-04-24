let img;

function preload() {
  // 이미지를 미리 로딩합니다.
  img = loadImage("Map.png"); 
}

function setup() {
  createCanvas(1408, 763);
  image(img, 0, 0,1408, 763);
}

function draw() {

}