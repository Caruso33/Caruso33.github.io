import React from "react"
import { Layout as AntLayout } from "antd"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import styled from "styled-components"
import colors from "../../utils/color"
import GlobalStyle from "./GlobalStyle"

const MainContent = styled(AntLayout)`
  padding: 24px 0;
  margin: auto;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 20rem minmax(max-content, 80rem) 1fr;
  grid-gap: 3rem;

  @media (max-width: 600em) {
    grid-template-columns: 1fr 20rem minmax(max-content, 80rem) 1fr;
    grid-gap: 2rem;
  }
`

const Content = styled(AntLayout.Content)`
  grid-column: 3 / span 1;
`

export default function Layout({ children }) {
  return (
    <AntLayout style={{ height: "100%" }}>
      <GlobalStyle />

      <Header />

      <MainContent>
        <Sidebar />

        <Content>{children}</Content>
      </MainContent>

      <Footer />
    </AntLayout>
  )
}
