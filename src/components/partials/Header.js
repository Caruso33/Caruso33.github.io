import React from "react"
import { Layout, Menu } from "antd"
import styled from "styled-components"
import colors from "../../utils/color"
import url from "../../utils/url"
import { navigate } from "gatsby"

const AntHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  color: ${colors.colorContrast};
  font-size: 4rem;
  font-family: "Great Vibes", cursive;
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
  const navigateTags = () => navigate(url.tags)

  return (
    <AntHeader>
      <Logo>{"<Tobias Leinss/>"}</Logo>

      <Menu theme="dark" mode="horizontal">
        <MenuItem key="1" onClick={navigateTags}>
          Tags
        </MenuItem>
      </Menu>
    </AntHeader>
  )
}
