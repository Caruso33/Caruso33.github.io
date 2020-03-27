import { Layout, Typography } from "antd"
import styled from "styled-components"
import profilImg from "../../../img/dist/landing/sizes/profil-400.webp"
import color from "../../../utils/color"

export const Sider = styled(Layout.Sider).attrs(() => ({
  width: 200
}))`
  grid-column: 2 / 3;
  align-self: flex-start;
  text-align: center;
  background: ${color.contentBackground};
`

export const ProfileImage = styled.img.attrs(() => ({
  src: profilImg
}))`
  margin: 1.5rem;
  object-fit: contain;
  border-radius: 50%;
  width: 50%;
`

export const ProfileTitle = styled(Typography.Title).attrs(() => ({
  level: 3
}))``
export const ProfileDescription = styled(Typography.Text).attrs(() => ({
  strong: true
}))`
  margin: 2px;
  display: inline-block;
`
export const IconWrapper = styled.div`
  margin: 1.5rem;

  & span {
    margin-right: 10px;
  }
`
export const iconStyle = { fontSize: "30px", color: color.background }

export const NumberArticles = styled.div``
export const LatestArticles = styled.div``
