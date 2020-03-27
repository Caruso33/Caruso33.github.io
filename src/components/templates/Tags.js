import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../partials/Layout"
import Header from "../partials/Header"
import Metatags from "../partials/MetaTags"
import Container from "../partials/Container"

function Tags(props) {
  const blogPost = props.data.allMarkdownRemark.edges
  const url = props.data.site.siteMetadata.siteUrl
  const { tag } = props.pageContext

  return (
    <Layout>
      <Metatags
        title={tag}
        description={`list of blogs with tag ${tag}`}
        url={url}
        pathname={props.location.pathname}
      />

      <Header
        moveTo={location => props.navigate(location)}
        type="tagList"
        title="TagList"
      />

      <Container>
        <h1>{`Available posts in ${tag}`}</h1>

        <div>
          {blogPost.map(({ node }, i) => (
            <Link to={`/${node.fields.slug}`} key={i}>
              {node.frontmatter.title}
            </Link>
          ))}
        </div>
      </Container>
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
