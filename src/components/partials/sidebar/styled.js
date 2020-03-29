import { Typography } from "antd"
import { Link } from "gatsby"
import styled from "styled-components"
import profilImg from "../../../img/dist/landing/sizes/profil-400.webp"
import color from "../../../utils/color"
import { boxShadow } from "../GlobalStyle"

export const Sider = styled.aside`
  align-self: flex-start;
  text-align: center;
  background: ${color.contentBackground};
  box-shadow: ${boxShadow};

  grid-row: 2 / span 1;
  grid-column: 2 / 3;
  @media only screen and (max-width: 1000px) {
    grid-column: 2 / -2;
    grid-row: 2 / span 1;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-template-rows: min-content min-content;
    align-items: center;
    justify-items: center;
  }
`

export const ProfileImage = styled.img.attrs(() => ({
  src: profilImg
}))`
  margin: 1.5rem;
  object-fit: contain;
  border-radius: 50%;
  width: 50%;
  box-shadow: ${boxShadow};

  @media only screen and (max-width: 1000px) {
    height: 11.5rem;
    width: 8rem;
  }
`

export const ProfileTitle = styled(Typography.Title).attrs(() => ({
  level: 3
}))`
  @media only screen and (max-width: 1000px) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
  }
`

export const ProfileTexts = styled(Typography.Text).attrs(() => ({
  strong: true
}))`
  margin: 2px;
  display: inline-block;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`

export const ProfileSkills = styled(ProfileTexts)``

export const ProfileDescription = styled(ProfileTexts)``

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

  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`

export const iconStyle = { fontSize: "25px" }

export const NumberArticles = styled.div`
  @media only screen and (max-width: 1000px) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
  }
`

export const PostTagsWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
  }
`

export const PostsByTags = styled.div`
  margin: 10px;
`

export const LatestArticlesWrapper = styled.div`
  @media only screen and (max-width: 1000px) {
    grid-row: 2 / span 1;
    grid-column: 3 / span 1;
  }
`

export const LatestArticlesTitle = styled.div`
  margin-bottom: 1rem;
`

export const LatestArticles = styled.div`
  min-height: 2rem;
  margin-bottom: 2rem;
`

export const LatestArtLink = styled(Link)`
  display: block;
`
