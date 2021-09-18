import React from "react"
import styled from "styled-components"
import color from "../../utils/color"
import { boxShadow } from "./GlobalStyle"

const PageWrapper = styled.div`
  background: ${color.contentBackground};
  padding: 1.5rem;
  margin: 1.5rem;
  box-shadow: ${boxShadow};
`

export default function PageContent({ children }) {
  return <PageWrapper>{children}</PageWrapper>
}
