import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/partials/Layout"
import Metatags from "../../components/partials/MetaTags"
import PageContent from "../../components/partials/PageContent"

export default function Imdb({ data, location }) {
  return (
    <Layout>
      <Metatags
        title={"Imdb"}
        description={"Rank best movies by years"}
        url={data.site.siteMetadata.siteUrl}
        pathname={location.pathname}
      />
      <PageContent>Imdb</PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile {
      edges {
        node {
          sourceInstanceName
          name
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
