import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/partials/Layout"
import Metatags from "../../components/partials/MetaTags"
import Header from "../../components/partials/Header"
import Container from "../../components/partials/Container"

export default function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group
  const url = props.data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <Metatags
        title={"Tag List"}
        description={"list of blog tags"}
        url={url}
        pathname={props.location.pathname}
      />

      <Header
        moveTo={location => props.navigate(location)}
        type="tagList"
        title="TagList"
      />

      <Container>
        <h1>All tags</h1>

        {data.map(tag => (
          <div key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}`}>
              {tag.fieldValue} {`(${tag.totalCount})`}
            </Link>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
