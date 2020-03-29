import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/partials/Layout"
import Metatags from "../components/partials/MetaTags"
import BlogItem from "../components/pages/home/BlogItem"
import { BlogItems } from "../components/pages/home/styled"

const Home = ({ data, location }) => {
  return (
    <Layout>
      <Metatags
        title={"Tobias Leinss"}
        description={"personal details and blog list"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />

      <BlogItems>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <BlogItem node={node} />
        })}
      </BlogItems>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD. MMMM, YYYY")
            image {
              childImageSharp {
                resize(width: 200, height: 130) {
                  src
                }
              }
            }
            imageUrl
            tags
          }
          excerpt(pruneLength: 350)
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
