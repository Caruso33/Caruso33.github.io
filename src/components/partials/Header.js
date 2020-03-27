import React from "react"
import { Layout, Menu } from "antd"
import styled from "styled-components"
import colors from "../../utils/color"
import url from "../../utils/url"
import { navigate, Link } from "gatsby"

const AntHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;

  &.ant-layout-header {
    padding: 0 10rem;
    @media only screen and (max-width: 1000px) {
      padding: 0 5rem;
    }
  }
`

const Logo = styled.div`
  color: ${colors.colorContrast};
  font-size: 4rem;
  font-family: "Great Vibes", cursive;

  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }
`

const MenuItem = styled(Menu.Item)`
  /* & {
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
  } */
`

export default function Header() {
  const navigatePortfolio = () => navigate(url.portfolio)
  const navigateAbout = () => navigate(url.about)

  return (
    <AntHeader>
      <Link to="/">
        <Logo>{"<Tobias Leinss/>"}</Logo>
      </Link>

      <Menu theme="dark" mode="horizontal">
        <MenuItem key="portfolio" onClick={navigatePortfolio}>
          Portfolio
        </MenuItem>
        <MenuItem key="about" onClick={navigateAbout}>
          About
        </MenuItem>
      </Menu>
    </AntHeader>
  )
}
