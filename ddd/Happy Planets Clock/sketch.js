let icon;

//Load Image for everything!
function preload() {
  earf = loadImage('planet-earth.png'); // I want to load planet leading the circular motion(second)!
  moon = loadImage('moon.png'); // I want to load moon leading the circular motion(min)!
  Sun = loadImage('sun (2).png'); // I want to load sun leading the circular motion(hour)!
}

//Setting up a canvas for everything!
function setup() {
  createCanvas(300, 300);
  smooth();
  noFill();
  textSize(15);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(242, 240, 252);
  let s = second();
  let smap = map(s, 0, 60, 0, 360);
  let m = minute();
  let mmap = map(m, 0, 60, 0, 360);
  let h = hour();
  let hmap = map(h, 0, 24, 0, 360);

  // This is the numerator clock!
  fill(183, 168, 255);
  noStroke();
  let timeText = nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2);
  text(timeText, 20, 30);
  // And here write sentence
  textSize(12);
  text("TIME WAITS FOR NO ONE! ʕง•ᴥ•ʔง!", 80, 30);
  textSize(12);
  text("BETTER DO IT NOW ᕦʕ •`ᴥ•´ʔᕤ!", 10, 290);
  
  drawSecondsArc(smap);
  drawMinutesArc(mmap);
  drawHoursArc(hmap);
}

function drawSecondsArc(smap) {
  // let angle = map(s, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
  strokeWeight(10);
  stroke(189, 214, 255);
  noFill();
  arc(150, 150, 200, 200, 360, smap);
  push();
    translate(width/2, height/2);
    rotate(smap);
    image(earf, 100, 0, 40, 40);
  pop();
}

function drawMinutesArc(mmap) {
  strokeWeight(7);
  stroke(252, 239, 179);
  noFill();
  arc(150, 150, 150, 150, 0, mmap);
  push();
    translate(width / 2, height / 2);
    rotate(mmap);
    image(moon, 80, 0, 25, 25);
  pop();
}

function drawHoursArc(hmap) {
  strokeWeight(4);
  stroke(255, 200, 100);
  noFill();
  arc(150, 150, 120, 120, 0, hmap);
  push();
    translate(width / 2, height / 2);
    rotate(hmap);
    image(Sun, 60, 0, 30, 30); 
  pop();
}

function drawCenterImage() {
  push();
    translate(width / 2, height / 2); // Move the origin to the center of the canvas
    image(Sun, 0, 0, 40, 40); // Draw the image at the center with size 40x40
  pop();
}







