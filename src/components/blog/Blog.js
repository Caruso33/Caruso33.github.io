import React from "react"
import Container from "@material-ui/core/Container"
import { withStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery, Link } from "gatsby"
// import './blog.scss'

function Blog({ classes }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
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
          <li key={node.frontmatter.title}>
            <Link to={`/blog/${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
            </Link>
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
