import { graphql, Link } from "gatsby"
import React from "react"
import Container from "../components/partials/Container"
import Metatags from "../components/partials/MetaTags"
import Layout from "../components/partials/Layout"

const Home = props => {
  const { data, location } = props

  return (
    <Layout>
      <Metatags
        title={"Blog List"}
        description={"list of blog posts"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />

      <Container>
        <Link to="tags/">Posts by Tags</Link>

        <ol>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.frontmatter.title}>
              <Link to={`/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD. MMMM, YYYY")
          }
          # html
          # excerpt(pruneLength: 250)
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
