import color from "../../../../utils/color"

let p
let snake
let food

let gameHasStarted = false
let frameRate = 2
let time = 0
let counter = 0

let rez = 20 // resolution
let realDim = { width: 0, height: 0 }

export default function snakeGame(p5) {
  if (!p) p = p5

  init()

  maintain()

  render()
}

function init() {
  if (realDim.width === 0) {
    realDim.width = p.floor(p.width / rez)
    realDim.height = p.floor(p.height / rez)
  }

  if (!snake) snake = new Snake()
  if (!food) food = new Food()
}

function maintain() {
  const now = Math.round(new Date().getTime() / 100)

  if (gameHasStarted && time !== now) {
    time = now
    counter++
  }

  if (counter % 200 === 0) {
    frameRate += 1
  }

  keyPress()
}

function render() {
  p.scale(rez)
  p.frameRate(frameRate)
  p.background(color["primary-color"])

  p.noStroke() // gets scaled otherwise

  food.show()

  if (snake.eat(food.loc)) food.setLocation()
  else snake.update()

  snake.show()
  if (snake.endGame()) end()
}

function end() {
  console.log("GAME OVER")
  p.background(255, 0, 0)
  p.noLoop()
}

function keyPress() {
  p.keyPressed = () => {
    switch (p.keyCode) {
      case p.LEFT_ARROW:
        return snake.setDir(-1, 0)

      case p.RIGHT_ARROW:
        return snake.setDir(1, 0)

      case p.DOWN_ARROW:
        return snake.setDir(0, 1)

      case p.UP_ARROW:
        return snake.setDir(0, -1)

      default:
        break
    }
    if (p.key === " " && gameHasStarted) return snake.grow()
  }
}

function Snake() {
  this.body = []
  this.len = 1

  this.xDir = 0
  this.yDir = 0

  this.setHead = () => {
    const [x, y] = getRandomPosition()
    this.body[0] = p.createVector(x, y)
  }

  this.setHead()

  this.endGame = () => {
    const head = this.body[0]

    const touchesBoundary =
      head.x >= realDim.width ||
      head.y >= realDim.height ||
      head.x <= -1 ||
      head.y <= -1

    if (touchesBoundary) return true

    for (const part of this.body.slice(1)) {
      const touchesOwnBody = head.x === part.x && head.y === part.y

      if (touchesOwnBody) return true
    }

    return false
  }

  this.eat = ({ x: posX, y: posY }) => {
    const { x, y } = this.body[0]
    if (x === posX && y === posY) {
      this.grow()
      return true
    } else return false
  }

  this.grow = () => {
    const head = this.body[0]
    const newHead = p.createVector(head.x + this.xDir, head.y + this.yDir)

    this.body.unshift(newHead)
    this.len++
  }

  this.update = () => {
    for (let i = this.body.length - 1; i >= 0; i--) {
      const part = this.body[i]

      if (i === 0) {
        part.x += this.xDir
        part.y += this.yDir
      } else {
        const next = this.body[i - 1]
        part.x = next.x
        part.y = next.y
      }
    }
  }

  this.show = () => {
    p.fill(255, 255, 255)

    for (const part of this.body) {
      p.rect(part.x, part.y, 1, 1)
    }
  }

  this.setDir = (xDir, yDir) => {
    if (!gameHasStarted) gameHasStarted = true

    this.xDir = xDir
    this.yDir = yDir
  }
}

function Food() {
  this.loc = p.createVector(0, 0)

  this.setLocation = () => {
    const [x, y] = getRandomPosition()
    this.loc = p.createVector(x, y)
  }

  this.setLocation()

  this.show = () => {
    p.fill(255, 0, 0)
    p.rect(food.loc.x, food.loc.y, 1, 1)
  }
}

function getRandomPosition() {
  const x = p.floor(p.random(realDim.width))
  const y = p.floor(p.random(realDim.height))
  return [x, y]
}
