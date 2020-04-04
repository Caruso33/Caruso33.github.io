import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../partials/Layout"
import Header from "../partials/Header"
import Metatags from "../partials/MetaTags"

function Tags({ data, pageContext, navigate, location }) {
  const blogPost = data.allMarkdownRemark.edges
  const url = data.site.siteMetadata.siteUrl
  const { tag } = pageContext

  return (
    <Layout>
      <Metatags
        title={tag}
        description={`list of blogs with tag ${tag}`}
        url={url}
        pathname={location.pathname}
      />

      <Header
        moveTo={location => navigate(location)}
        type="tagList"
        title="TagList"
      />

      <h1>{`Available posts in ${tag}`}</h1>

      <div>
        {blogPost.map(({ node }, i) => (
          <Link to={`/${node.fields.slug}`} key={i}>
            {node.frontmatter.title}
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
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
