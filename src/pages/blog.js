import React from "react"
import { Link } from "gatsby"
import AppBar from "../components/partials/AppBar"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"
import Container from "../components/partials/Container"
import { withStyles } from "@material-ui/styles"

const Blog = props => {
  const moveTo = location => props.navigate(location)

  const { data, location } = props
  const url = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <Metatags
        title={"Blog List"}
        description={"list of blog posts"}
        url={url}
        pathname={location.pathname}
      />

      <AppBar moveTo={moveTo} type="blog" />

      <Container>
        <Link to="/blog/tags/">Posts by Tags</Link>

        <ol>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={`/blog/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </Link>
              <p>{node.excerpt}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Layout>
  )
}

export default withStyles(styles)(Blog)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD. MMMM, YYYY")
          }
          # html
          excerpt(pruneLength: 250)
          fields {
            slug
          }
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

function styles() {
  return {}
}
