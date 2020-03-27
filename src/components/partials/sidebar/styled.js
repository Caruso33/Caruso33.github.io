import { Tag, Layout, Typography } from "antd"
import styled from "styled-components"
import profilImg from "../../../img/dist/landing/sizes/profil-400.webp"
import color from "../../../utils/color"
import { Link } from "gatsby"

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
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
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
  margin: 1.8rem;

  & svg {
    margin-right: 15px;
    transition: transform 0.5s ease-in-out;
  }
  & svg:hover {
    color: ${color["primary-color"]};
    transform: scale(1.7);
  }
`

export const iconStyle = { fontSize: "25px" }

export const NumberArticles = styled.div``
export const PostsByTags = styled.div`
  margin: 10px;
`
export const LatestArticlesTitle = styled.div``
export const LatestArticles = styled.div`
  min-height: 2rem;
  margin-bottom: 2rem;
`
export const TagLink = styled(Tag)`
  cursor: pointer;
`

export const LatestArtLink = styled(Link)`
  display: inline-block;
`
