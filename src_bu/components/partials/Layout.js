import _get from "lodash/get"
import { BackTop } from "antd"
import React from "react"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./Sidebar"
import { useWindowDimensions } from "components/utils"
import { PageLayout, Content } from "./layout/styled"

export default function Layout({ children, prev, next, location }) {
  const data = useStaticQuery(query)
  const { width } = useWindowDimensions()

  const isMobileSize = width < 1000
  const hideSidebar = location
    ? !["/", "/about"].includes(location.pathname)
    : true

  const tags = new Set()

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (_get(node, "frontmatter.tags")) {
      node.frontmatter.tags.forEach(tag => tags.add(tag))
    }
  })

  return (
    <PageLayout>
      <GlobalStyle />
      <BackTop />

      <Header />

      <Sidebar
        totalCount={data.allMarkdownRemark.totalCount}
        tags={Array.from(tags)}
        lastArticles={data.allMarkdownRemark.edges.slice(0, 5)}
        isMobileSize={isMobileSize}
        hideSidebar={hideSidebar}
      />

      <Content {...{ hideSidebar }}>{children}</Content>

      <Footer {...{ prev, next }} />
    </PageLayout>
  )
}

const query = graphql`
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
            tags
          }
        }
      }
    }
  }
`
