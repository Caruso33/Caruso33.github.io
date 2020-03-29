import React from "react"
import { Layout } from "antd"
import styled from "styled-components"

const Foot = styled(Layout.Footer)`
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: 3 / span 1;
  @media only screen and (max-width: 1000px) {
    grid-row: 4 / span 1;
  }
`

export default function Footer() {
  return <Foot>I am footer</Foot>
}
