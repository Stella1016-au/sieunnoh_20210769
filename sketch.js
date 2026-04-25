/** @type {import('p5')} */
let myInput, myButton;
let greeting = "";

function setup(){
  createCanvas(400,400);

  myInput=createInput();
  myInput.position(20,60);

  myButton=createButton('인사하기');
  myButton.position(myInput.x+myInput.width+10,60);

  myButton.mousePressed(greetUser);
}

function greetUser(){
  const name = myInput.value();
  greeting = "안녕하세요,"+ name + "님";
  myInput.value("");//입력창 비우기
}

function draw(){
  background(255);
  textSize(24);
  text(greeting,20,150);
}