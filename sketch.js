let x, y;
let img, bgImg;
let isTouching = false;
let isReleased = true;

function preload() {
  img = loadImage('assets/tshirt.png');
  img2 = loadImage('assets/pile1.png');
  bgImg = loadImage('assets/background.png');
}

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = 0;
}

function draw() {
  // Draw the background image
  image(bgImg, 0, 0, width, height);

  if (isTouching) {
    image(img, 0, posY, 30, 30);
    if (posY <= windowHeight - 30) {
      posY += 1;
    }
  } else {
    if (!isReleased) {
      posY = 0;
      isReleased = true;
    }
  }

  // Draw the other images
  image(img, x, y, 200, 200);
  image(img2, 300, 240, 200, 200);

  // Move the main image up
  y = y + 2;

  // Reset to the bottom
  if (y > 280) {
    y = 280;
  }
}
