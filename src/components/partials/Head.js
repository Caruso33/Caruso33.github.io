import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Head(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title = "" } = props

  return (
    <Helmet
      title={`${title ? `${title} | ` : ""}${data.site.siteMetadata.title}`}
    />
  )
}
