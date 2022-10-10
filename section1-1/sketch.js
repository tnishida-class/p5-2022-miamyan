function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0, 204, 102);
  strokeWeight(4);
  fill(255, 153, 0);
  triangle(12,120,116,120,116,10);
  fill(51, 153, 255);
  triangle(0,108,106,108,106,0);
  fill(255, 51, 153);
  textSize(50);
  textFont("serif");
  text("78", 68, 100);
}
