let isInitiated = false
let p

const dim = {
  x: 0,
  y: 0,
  r: 20,
  xDir: 1,
  yDir: 1,
  speed: 0
}

export default function playground(p5, {}) {
  if (!p) p = p5

  p.fill(255, 0, 0, 150)
  p.stroke("#ccc")
  p.strokeWeight(3)

  p.line(20, 50, 100, p.height - 50)

  p.rectMode(p.CENTER)
  p.rect(100, 50, 100, 75)

  p.fill(200, 20, 150, 10)
  p.ellipse(650, 50, 250, 300)

  p.fill(20, 200, 50, 10)
  p.arc(250, 50, 80, 80, 0, p.PI + p.QUARTER_PI, p.PIE)

  drawSpots()
  drawMovingCircle()
}

function drawSpots() {
  const d = {
    r: p.random(100, 250),
    g: p.random(0, 50),
    b: p.random(100, 20),
    a: p.random(50, 150),
    x: p.random(20, p.width - 20),
    y: p.random(20, p.height - 20)
  }

  p.fill(d.r, d.g, d.b, d.a)
  p.ellipse(d.x, d.y, 25, 25)
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

  move(dim, {})

  function move(selection, {}) {
    const { x, y, r, xDir, yDir, speed } = selection

    if (x + r >= p.width) selection.xDir = -1
    else if (x - r <= 0) selection.xDir = 1

    if (y + r >= p.height) selection.yDir = -1
    else if (y - r <= 0) selection.yDir = 1

    selection.x += speed * xDir
    selection.y += speed * yDir
  }
}
