import { graphql, Link } from "gatsby"
import _capitalize from "lodash/capitalize"
import React from "react"
import styled from "styled-components"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"
import PageContent from "../components/partials/PageContent"
import imgCalculator from "../img/dist/portfolio/calculator.webp"
import imgBarChart from "../img/dist/portfolio/d3barChart.webp"
import imgMarkdownPreviewer from "../img/dist/portfolio/markdown-previewer.webp"
import imgPomodoR from "../img/dist/portfolio/pomodor-min.webp"

const PortfolioContent = styled(Link)`
  display: block;
`

export default function Portfolio({ data, location }) {
  const portfolioContent = data.allFile.edges.filter(
    (edge) => edge.node.sourceInstanceName === "portfolio"
  )
  const portfolioToShow = ["imdb"]

  return (
    <Layout>
      <Metatags
        title={"Portfolio"}
        description={"selected works"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />

      <PageContent>
        {/* <p>
          Everyone has to start somewhere, and these were my beginnings with Web
          Development.
        </p> */}

        {portfolioContent
          .filter(({ node }) => portfolioToShow.indexOf(node.name) !== -1)
          .map(({ node }) => {
            console.log({ node })
            return (
              <PortfolioContent key={node.name} to={`/portfolio/${node.name}`}>
                {_capitalize(node.name)}
              </PortfolioContent>
            )
          })}

        {/* {portfolioData.map()} */}
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile {
      edges {
        node {
          sourceInstanceName
          name
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

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
    ),
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
    ),
  },
  {
    orientation: "vertical",
    key: "markdown-previewer",
    img: imgMarkdownPreviewer,
    imgTitle: "A Markdown Previewer",
    linkTo: "https://codepen.io/caruso33/full/rbROBa",
    contentTitle: "Markdown Previewer",
    contentParagraph: (
      <span>
        Created along the{" "}
        <a href="https://www.freecodecamp.org/learn/">
          front end libraries path
        </a>{" "}
        of freecodecamp
      </span>
    ),
  },
  {
    orientation: "vertical",
    key: "calculator",
    img: imgCalculator,
    imgTitle: "JS Calculator",
    linkTo: "https://codepen.io/caruso33/full/ppBdrW",
    contentTitle: "JS Calculator",
    contentParagraph: (
      <span>
        Created along the{" "}
        <a href="https://www.freecodecamp.org/learn/">
          front end libraries path
        </a>{" "}
        of freecodecamp
      </span>
    ),
  },
]
