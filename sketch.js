let img;

function preload(){
  img = loadImage("Map.png");//이미지 로드
}

function setup(){
    createCanvas(1408,718);
    image(img,0,0,1408,718);

    noStroke();
    rect(0,0,160,320);
    rect(160,240,120,80);
    rect(0,390,180,330);
    rect(180,390,100,80);

    rect(1220,0,188,320);
    rect(1120,240,120,80);
    rect(1120,390,120,80);
    rect(1229,390,188,330);

    rect(0,0,1408,20);
    rect(0,700,1408,20);


}

function draw(){
  if(mouseIsPressed===true){
    console.log(mouseX,mouseY);

    
  }
}