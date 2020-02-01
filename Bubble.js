var x;
var y;
var rect;

function setup() {
  createCanvas(610, 410);
  x = random(width);
  y = random(height);
  rect(height = 70,width = 50)
}

function draw() {
  background(200,200,40);

  if (dist(mouseX, mouseY, x, y) > height,width) {
    if (mouseIsPressed) {
      x = (mouseX);
      y = (mouseY);
    }
    fill(255, 200, 80, 200);
  }
  else {
    fill(255, 220, 200, 100);
  }

  ellipse(x, y, height,width * 1);
  x += random(-5, 5);
  y += random(-5, 5);
}
