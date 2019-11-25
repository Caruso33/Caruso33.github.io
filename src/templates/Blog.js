import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default function BlogTemplate(props) {
  const { data } = props

  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.data}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  )
}
