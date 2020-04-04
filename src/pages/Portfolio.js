import React from "react"
import styled from "styled-components"
import color from "../utils/color"
import { boxShadow } from "../components/partials/GlobalStyle"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"
import { graphql } from "gatsby"

const PortfolioDetails = styled.div`
  background: ${color.contentBackground};
  padding: 1.5rem;
  margin: 1.5rem;
  box-shadow: ${boxShadow};
`

export default function Portfolio({ data, location }) {
  return (
    <Layout>
      <Metatags
        title={"Portfolio"}
        description={"selected works"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />

      <PortfolioDetails>Coming soon...</PortfolioDetails>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

// const portfolioData = [
//   {
//     orientation: "vertical",
//     key: "pomodor",
//     img: imgPomodoR,
//     imgTitle: "a pomodoro tomatoe timer in material design",
//     linkTo: "https://caruso33.github.io/pomodoR/",
//     contentTitle: "Tomatoe Timer",
//     contentParagraph: (
//       <span>
//         Created with <a href="https://reactjs.org">ReactJs</a> and{" "}
//         <a href="https://material-ui.com">Material-UI</a> components
//       </span>
//     )
//   },
//   {
//     orientation: "horizontal",
//     key: "d3-chart",
//     img: imgBarChart,
//     imgTitle: "A D3 Bar Chart of GDPs progression over time",
//     linkTo: "https://codepen.io/caruso33/full/oRebmV",
//     contentTitle: "Basic D3 Bar Chart",
//     contentParagraph: (
//       <span>
//         Created with <a href="https://d3js.org">D3.js</a>
//       </span>
//     )
//   },
//   {
//     orientation: "vertical",
//     key: "markdown-previewer",
//     img: imgMarkdownPreviewer,
//     imgTitle: "A Markdown Previewer",
//     linkTo: "https://codepen.io/caruso33/pen/rbROBa?editors=1010",
//     contentTitle: "Markdown Previewer",
//     contentParagraph: (
//       <span>
//         Created along the{" "}
//         <a href="https://www.freecodecamp.org/learn/">
//           front end libraries path
//         </a>{" "}
//         of freecodecamp
//       </span>
//     )
//   },
//   {
//     orientation: "vertical",
//     key: "calculator",
//     img: imgCalculator,
//     imgTitle: "JS Calculator",
//     linkTo: "https://codepen.io/caruso33/pen/ppBdrW",
//     contentTitle: "JS Calculator",
//     contentParagraph: (
//       <span>
//         Created along the{" "}
//         <a href="https://www.freecodecamp.org/learn/">
//           front end libraries path
//         </a>{" "}
//         of freecodecamp
//       </span>
//     )
//   }
// ]
