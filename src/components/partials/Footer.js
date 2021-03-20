import React from "react"
import { Layout } from "antd"
import styled from "styled-components"
import { Prev, Next } from "./PrevNext"

const Foot = styled(Layout.Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: 3 / span 1;
  @media only screen and (max-width: 1000px) {
    grid-row: 4 / span 1;
  }
`

export default function Footer({ prev, next }) {
  return (
    <Foot>
      <Prev prev={prev && prev.node} />

      <div>I am a Footer</div>

      <Next next={next && next.node} />
    </Foot>
  )
}
