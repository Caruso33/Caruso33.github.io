import { graphql } from "gatsby"
import React from "react"
import Metatags from "../components/partials/MetaTags"
import Layout from "../components/partials/Layout"
import BlogItem from "./home/BlogItem"
import { BlogItems } from "./home/styled"

const Home = props => {
  const { data, location } = props

  return (
    <Layout>
      <Metatags
        title={"Tobias Leinss"}
        description={"personal details and blog list"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />

      <BlogItems>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogItem node={node} />
        ))}
      </BlogItems>
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
            image
            # description(pruneLength: 250)
          }
          # html
          excerpt(pruneLength: 250)
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
