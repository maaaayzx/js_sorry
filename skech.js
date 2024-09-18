function setup() {
  createCanvas(400, 400);
  background ("white");
}

function draw() {
  stroke("blue");
  fill("green");
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 20, 20);
  }
}
