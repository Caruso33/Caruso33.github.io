import React from "react"
import Layout from "../../components/partials/Layout"
import getWindowDimensions from "../../components/utils/useWindowDimensions"
import Sketch from "react-p5"
import color from "../../utils/color"
import playground from "../../components/pages/portfolio/p5/playground"

export default function P5() {
  const dimensions = getWindowDimensions()

  const canvasDimensions = {
    width: dimensions.width > 1100 ? 800 : dimensions.width - 250,
    height: Math.min(500, dimensions.height)
  }


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasDimensions.width, canvasDimensions.height).parent(
      canvasParentRef
    )
    p5.background(color["primary-color"])
  }

  const draw = p5 => {
    playground(p5, { canvasDimensions })
  }

  return (
    <Layout>
      <Sketch setup={setup} draw={draw} />
    </Layout>
  )
}
