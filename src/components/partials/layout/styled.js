import styled from "styled-components"
import { Layout } from "antd"

export const PageLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 1fr 25rem minmax(min-content, 80rem) 1fr;
  grid-template-rows: 6.4rem 1fr 5rem;
  grid-gap: 3rem;
  min-height: 100%;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 0rem 1fr 0rem;
    grid-template-rows: 6.4rem min-content 1fr 5rem;
    grid-gap: 2rem;
    overflow-y: auto;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 0rem 1fr 0rem;
    grid-gap: 1rem;
  }
`

export const Content = styled.main`
  overflow-y: auto;

  grid-column: 3 / span 1;
  grid-row: 2 / span 1;

  @media only screen and (max-width: 1000px) {
    grid-column: 2 / -2;
    grid-row: ${({ hideSidebar }) =>
      hideSidebar ? "2 / span 2" : "3 / span 1"};
    width: ${({ hideSidebar }) => (hideSidebar ? "100%" : "inherit")};
    justify-self: center;
  }
`
