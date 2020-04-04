import React from "react"
import Layout from "../../components/partials/Layout"
import getWindowDimensions from "../../components/utils/useWindowDimensions"
import Sketch from "react-p5"
import playground from "../../components/pages/portfolio/p5/playground"

export default function P5() {
  const windowDim = getWindowDimensions()

  const canvasDim = {
    width: windowDim.width > 1100 ? 800 : windowDim.width - 250,
    height: Math.min(500, windowDim.height)
  }

  let extraCanvas

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasDim.width, canvasDim.height).parent(canvasParentRef)

    extraCanvas = p5.createGraphics(canvasDim.width, canvasDim.height)
    extraCanvas.clear()
  }

  const draw = p5 => {
    playground(p5, { extraCanvas })
  }

  return (
    <Layout>
      <Sketch setup={setup} draw={draw} />
    </Layout>
  )
}
