import color from "../../../../utils/color"

let isInitiated = false
let p
let time
let counter = 0

const dim = {
  x: 0,
  y: 0,
  r: 20,
  xDir: 1,
  yDir: 1,
  speed: 0
}

export default function playground(p5, { extraCanvas }) {
  if (!p) p = p5
  p.background(color["primary-color"])

  const now = Math.round(new Date().getTime() / 100)
  if (time !== now) {
    time = now

    counter++
    drawSpots(extraCanvas)
  }

  drawWithNoTrails()

  if (p.mouseIsPressed) {
    extraCanvas.fill(255, 150)
    extraCanvas.noStroke()
    extraCanvas.ellipse(p.mouseX, p.mouseY, 25, 25)
  }

  p.image(extraCanvas, 0, 0)
}

function drawWithNoTrails() {
  p.fill(255, 0, 0, 150)
  p.stroke("#ccc")
  p.strokeWeight(3)

  p.line(20, 50, 100, p.height - 50)

  p.rectMode(p.CENTER)
  p.rect(100, 50, 100, 75)

  p.fill(200, 20, 150, 10)
  p.ellipse(650, 150, 150, 200)

  p.fill(20, 200, 50, 10)
  p.arc(250, 150, 80, 80, 0, p.PI + p.QUARTER_PI, p.PIE)

  drawMovingCircle()
}

function drawSpots(extraCanvas) {
  const d = {
    r: p.random(100, 250),
    g: p.random(0, 50),
    b: p.random(100, 20),
    a: p.random(50, 150),
    x: p.random(20, p.width - 20),
    y: p.random(20, p.height - 20)
  }

  extraCanvas.fill(d.r, d.g, d.b, d.a)
  extraCanvas.ellipse(d.x, d.y, 25, 25)
}

function initializeDims() {
  if (!isInitiated) {
    dim.x = p.random(100, p.width - 100)
    dim.y = p.random(100, p.height - 100)
    dim.speed = p.random(1, 10)

    isInitiated = true
  }
}

function drawMovingCircle() {
  initializeDims()

  p.fill(20, 20, 200, 100)
  p.circle(dim.x, dim.y, dim.r)
  move(dim)

  function move(selection) {
    const { x, y, r, xDir, yDir, speed } = selection

    if (x + r >= p.width) selection.xDir = -1
    else if (x - r <= 0) selection.xDir = 1

    if (y + r >= p.height) selection.yDir = -1
    else if (y - r <= 0) selection.yDir = 1

    selection.x += speed * xDir
    selection.y += speed * yDir
  }
}
