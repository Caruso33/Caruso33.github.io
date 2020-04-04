import styled from "styled-components"
import color from "../../../utils/color"
import { Typography } from "antd"
import { Link } from "gatsby"
import { boxShadow } from "../../partials/GlobalStyle"

export const BlogItems = styled.ol`
  list-style: none;
`

export const BlogListItem = styled.li`
  padding: 1.5rem;
  margin: 1.5rem;
  background: ${color.contentBackground};

  transition: box-shadow 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    box-shadow: ${boxShadow};
  }
`

export const BlogTitle = styled(Typography.Title).attrs(() => ({
  level: 2
}))``

export const BlogImage = styled.img`
  height: 100%;
  margin-right: 2rem;
`

export const ImageExcerptWrapper = styled.div`
  height: ${({ hasImage }) => (hasImage ? "13rem" : "7rem")};
  display: flex;
`

export const DateNTags = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ExcerptNReadFull = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BlogExcerpt = styled(Typography.Paragraph).attrs(() => ({
  ellipsis: { rows: 4 }
}))``

export const ReadFull = styled(Link)`
  display: inline-block;
  margin-left: auto;
`
