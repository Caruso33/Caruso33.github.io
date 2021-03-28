import { Menu } from "antd"
import { Link, navigate } from "gatsby" // navigate
import React from "react"
import styled from "styled-components"
import color from "../../utils/color"
import url from "../../utils/url"
import { boxShadow } from "../partials/GlobalStyle"

const Head = styled.header`
  background: ${color["primary-color"]};

  grid-column: 1 / -1;
  grid-row: 1 / span 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${boxShadow} !important;

  padding: 0 10rem;
  @media only screen and (max-width: 1000px) {
    padding: 0 5rem;

    & .ant-menu-item {
      padding: 0 10px;
    }
  }
`

const Logo = styled.div`
  color: ${color.colorContrast};
  font-family: "Great Vibes", cursive;

  font-size: 4rem;
  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`

const MenuItem = styled(Menu.Item)`
  & {
    display: inline-block;
  }

  &:after {
    content: "";
    width: 0px;
    height: 1px;
    display: block;
    color: white;
    background: black;
    transition: 300ms;
  }

  &:hover:after {
    width: 100%;
  }
`

export default function Header() {
  const navigateToUrl = ({ key }) => navigate(url[key])

  return (
    <Head>
      <Link to="/">
        <Logo>{"<Tobias Leinss/>"}</Logo>
      </Link>

      <Menu theme="dark" mode="horizontal" onClick={navigateToUrl}>
        <MenuItem key="portfolio">Portfolio</MenuItem>

        <MenuItem key="about">About</MenuItem>
      </Menu>
    </Head>
  )
}
