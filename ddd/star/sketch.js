let flowers = [];
const maxFlowers = 100;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);
  noLoop();

  document.getElementById('generate').addEventListener('click', () => {
    if (flowers.length < maxFlowers) {
      for (let i = 0; i < 5; i++) {
        flowers.push({
          x: random(50, width - 50),
          y: random(50, height - 50),
          size: random(20, 50),
          color: color(random(200), random(180), random(255))
        });
      }
      redraw();
    }
  });

  document.getElementById('restart').addEventListener('click', () => {
    flowers = [];
    loop();
    redraw();
  });
}

function draw() {
  background(255);

  for (let flower of flowers) {
    push();
    translate(flower.x, flower.y);
    fill(flower.color);
    noStroke();
    drawStar(0, 0, flower.size / 2, flower.size, 5);
    pop();
  }

  if (flowers.length >= maxFlowers) {
    noLoop();
    fill('#141414');
    textSize(40);
    textAlign(CENTER, CENTER);
    text('Wow! You made 100 stars!', width / 2, height - 20 );
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}