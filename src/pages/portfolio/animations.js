import { Radio } from "antd"
import _capitalize from "lodash/capitalize"
import p5 from "p5"
import React from "react"
import playground from "../../components/pages/portfolio/p5/playground"
import snake from "../../components/pages/portfolio/p5/snake"
import Layout from "../../components/partials/Layout"
import getWindowDimensions from "../../components/utils/useWindowDimensions"
import usePrevious from "../../components/utils/usePrevious"

export default function P5() {
  const windowDim = getWindowDimensions()

  const p5Options = ["snake"] //, "playground"]

  const [option, setOption] = React.useState(p5Options[0])

  const p5DivRef = React.useRef()
  const sketchRef = React.useRef()

  const prevOption = usePrevious(option)
  React.useEffect(() => {
    if (!sketchRef.current || (prevOption && option && prevOption !== option)) {
      if (sketchRef.current) {
        sketchRef.current.remove()
      }

      sketchRef.current = new p5(p5Sketch, p5DivRef.current)
      console.log(sketchRef.current)
    }

    if (sketchRef.current) return sketchRef.current.remove
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p5Sketch, option])

  function p5Sketch(sketch) {
    const canvasDim = {
      width: windowDim.width > 1100 ? 800 : windowDim.width - 250,
      height: Math.min(500, windowDim.height)
    }

    let extraCanvas

    sketch.setup = () => {
      sketch
        .createCanvas(canvasDim.width, canvasDim.height)
        .parent(p5DivRef.current)

      extraCanvas = sketch.createGraphics(canvasDim.width, canvasDim.height)
      extraCanvas.clear()
    }

    sketch.draw = () => {
      switch (option) {
        case "playground":
          playground(sketch, { extraCanvas })
          break

        case "snake":
          snake(sketch, {})
          break
        default:
          break
      }
    }

    sketch.windowResized = () => {
      sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight)
    }
  }

  return (
    <Layout>
      <Radio.Group
        style={{ marginBottom: "1rem" }}
        value={option}
        onChange={e => setOption(e.target.value)}
      >
        {p5Options.map(opt => (
          <Radio.Button key={opt} value={opt}>
            {_capitalize(opt)}
          </Radio.Button>
        ))}
      </Radio.Group>

      <div key={p5Options} ref={p5DivRef} />
    </Layout>
  )
}
