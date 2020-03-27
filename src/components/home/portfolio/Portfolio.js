import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import React from "react"
import imgCalculator from "../../../img/dist/portfolio/calculator.webp"
import imgBarChart from "../../../img/dist/portfolio/d3barChart.webp"
import imgMarkdownPreviewer from "../../../img/dist/portfolio/markdown-previewer.webp"
import imgPomodoR from "../../../img/dist/portfolio/pomodor-min.webp"
import { FullPageSlide } from "../../fullpage/Fullpage"
// import "./portfolio.scss"
import PortfolioCard from "./PortfolioCard"

const useStyles = (viewportWidth = 999) =>
  makeStyles({
    CardVertical: {
      width: Math.min(300, viewportWidth),
      margin: "auto",
      marginBottom: 30
    },
    CardHorizontal: {
      width: Math.min(500, viewportWidth),
      margin: "auto",
      marginBottom: 30
    },
    Media: {
      height: 550
    }
  })

export default () => {
  const isMobileViewport = useMediaQuery("(max-width:840px)")
  const viewportWidth =
    typeof window !== "undefined" &&
    window.document.documentElement.clientWidth - 40

  const classes = useStyles(viewportWidth)()

  return portfolioData.map(d => (
    <PortfolioCardWrapper key={d.key} isMobileViewport={isMobileViewport}>
      <PortfolioCard
        classes={classes}
        img={d.img}
        imgTitle={d.imgTitle}
        linkTo={d.linkTo}
        contentTitle={d.contentTitle}
        contentParagraph={d.contentParagraph}
        orientation={d.orientation}
      />
    </PortfolioCardWrapper>
  ))
}

const PortfolioCardWrapper = ({ isMobileViewport, children }) => {
  if (isMobileViewport) return <>{children}</>

  return <FullPageSlide>{children}</FullPageSlide>
}

const portfolioData = [
  {
    orientation: "vertical",
    key: "pomodor",
    img: imgPomodoR,
    imgTitle: "a pomodoro tomatoe timer in material design",
    linkTo: "https://caruso33.github.io/pomodoR/",
    contentTitle: "Tomatoe Timer",
    contentParagraph: (
      <span>
        Created with <a href="https://reactjs.org">ReactJs</a> and{" "}
        <a href="https://material-ui.com">Material-UI</a> components
      </span>
    )
  },
  {
    orientation: "horizontal",
    key: "d3-chart",
    img: imgBarChart,
    imgTitle: "A D3 Bar Chart of GDPs progression over time",
    linkTo: "https://codepen.io/caruso33/full/oRebmV",
    contentTitle: "Basic D3 Bar Chart",
    contentParagraph: (
      <span>
        Created with <a href="https://d3js.org">D3.js</a>
      </span>
    )
  },
  {
    orientation: "vertical",
    key: "markdown-previewer",
    img: imgMarkdownPreviewer,
    imgTitle: "A Markdown Previewer",
    linkTo: "https://codepen.io/caruso33/pen/rbROBa?editors=1010",
    contentTitle: "Markdown Previewer",
    contentParagraph: (
      <span>
        Created along the{" "}
        <a href="https://www.freecodecamp.org/learn/">
          front end libraries path
        </a>{" "}
        of freecodecamp
      </span>
    )
  },
  {
    orientation: "vertical",
    key: "calculator",
    img: imgCalculator,
    imgTitle: "JS Calculator",
    linkTo: "https://codepen.io/caruso33/pen/ppBdrW",
    contentTitle: "JS Calculator",
    contentParagraph: (
      <span>
        Created along the{" "}
        <a href="https://www.freecodecamp.org/learn/">
          front end libraries path
        </a>{" "}
        of freecodecamp
      </span>
    )
  }
]
