import p5 from "p5"
import React from "react"
import playground from "../../components/pages/portfolio/p5/playground"
import Layout from "../../components/partials/Layout"
import getWindowDimensions from "../../components/utils/useWindowDimensions"

export default function P5() {
  const windowDim = getWindowDimensions()

  const p5DivRef = React.useRef()
  const sketchRef = React.useRef()

  React.useEffect(() => {
    sketchRef.current = new p5(p5Sketch, p5DivRef.current)
  }, [])

  function p5Sketch(sketch) {
    const canvasDim = {
      width: windowDim.width > 1100 ? 800 : windowDim.width - 250,
      height: Math.min(500, windowDim.height)
    }

    let extraCanvas

    sketch.setup = () => {
      sketch.createCanvas(canvasDim.width, canvasDim.height)

      extraCanvas = sketch.createGraphics(canvasDim.width, canvasDim.height)
      extraCanvas.clear()
    }

    sketch.draw = () => {
      playground(sketch, { extraCanvas })
    }
  }

  return (
    <Layout>
      <div ref={p5DivRef} />
    </Layout>
  )
}
