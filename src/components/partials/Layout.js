import _get from "lodash/get"
import { Layout as AntLayout, BackTop } from "antd"
import React from "react"
import styled from "styled-components"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./Sidebar"
import useWindowDimensions from "../utils/useWindowDimensions"

const PageLayout = styled(AntLayout)`
  display: grid;
  grid-template-columns: 1fr 25rem minmax(min-content, 80rem) 1fr;
  grid-template-rows: 6.4rem 1fr 5rem;
  grid-gap: 3rem;
  min-height: 100%;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr minmax(min-content, max-content) 1fr;
    grid-template-rows: 6.4rem min-content 1fr 5rem;
    grid-gap: 2rem;
    overflow-y: auto;
  }
`

const Content = styled.main`
  overflow-y: auto;

  grid-column: 3 / span 1;
  grid-row: 2 / span 1;

  @media only screen and (max-width: 1000px) {
    grid-column: 2 / -2;
    grid-row: 3 / span 1;
  }
`

export default function Layout({ children, prev, next }) {
  const data = useStaticQuery(query)
  const { width } = useWindowDimensions()

  const isMobileSize = width < 1000

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
      />

      <Content>{children}</Content>

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
