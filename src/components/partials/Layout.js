import { Layout as AntLayout } from "antd"
import React from "react"
import styled from "styled-components"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"

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
    /* overflow-y: unset; */
    grid-column: 2 / -2;
    grid-row: 3 / span 1;
  }
`

export default function Layout({ children, sidebar, data }) {
  console.log({ data })

  return (
    <PageLayout>
      <GlobalStyle />

      <Header />

      {sidebar}

      <Content>{children}</Content>

      <Footer />
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 350)
        }
      }
    }
  }
`
