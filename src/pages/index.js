import _get from "lodash/get"
import { graphql } from "gatsby"
import React from "react"
import Metatags from "../components/partials/MetaTags"
import Layout from "../components/partials/Layout"
import BlogItem from "./home/BlogItem"
import { BlogItems } from "./home/styled"
import Sidebar from "../components/partials/Sidebar"

const Home = ({ data, location }) => {
  const tags = new Set()
  const blogItems = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    blogItems.push(<BlogItem node={node} />)

    if (_get(node, "frontmatter.tags")) {
      node.frontmatter.tags.forEach(tag => tags.add(tag))
    }
  })

  return (
    <Layout
      sidebar={
        <Sidebar
          totalCount={data.allMarkdownRemark.totalCount}
          tags={Array.from(tags)}
          lastArticles={data.allMarkdownRemark.edges.slice(0, 5)}
        />
      }
    >
      <Metatags
        title={"Tobias Leinss"}
        description={"personal details and blog list"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />

      <BlogItems>{blogItems}</BlogItems>
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
            tags
          }
          # html
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
