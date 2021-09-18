import color from "../../utils/color"
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../partials/Layout"
import Metatags from "../partials/MetaTags"
import styled from "styled-components"
import { boxShadow } from "../partials/GlobalStyle"

const TagsWrapper = styled.div`
  background: ${color.contentBackground};
  box-shadow: ${boxShadow};

  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: 1.5rem;
`

function Tags({ data, pageContext, location }) {
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

      <TagsWrapper>
        <h1>{`Available posts in ${tag}`}</h1>

        <div>
          {blogPost.map(({ node }, i) => {
            console.table(node)
            return (
              <Link to={`/${node.fields.slug}`} key={i}>
                {node.frontmatter.date} - {node.frontmatter.title}
              </Link>
            )
          })}
        </div>
      </TagsWrapper>
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
            date(formatString: "YYYY/MM/DD")
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
