import React from "react"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"

function Blog({ classes }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Container className={classes.paper}>
      {data.site.siteMetadata.title}

      <ol>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Container>
  )
}

export default withStyles(styles)(Blog)

function styles() {
  return {
    paper: {
      padding: 50,
      paddingTop: 68,
      "@media screen and (max-width: 600px)": {
        paddingTop: 58
      }
    }
  }
}
