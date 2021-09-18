import styled from "styled-components"
import color from "../../../utils/color"
import { boxShadow } from "../../partials/GlobalStyle"
import { Typography } from "antd"

export const BlogWrapper = styled.div`
  background: ${color.contentBackground};
  box-shadow: ${boxShadow};

  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: 1.5rem;
`

export const TitleNTags = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DateVersionWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: 2rem;
  text-align: right;
`

export const BlogDate = styled.div``

export const BlogVersionText = styled(Typography.Text)``
export const BlogVersionDateText = styled(Typography.Text)``

export const ThumbnailSrc = styled.img`
  width: 100%;
`

export const BlogHtml = styled.div`
  & ol {
    list-style-type: none;
  }

  & img {
    width: 100%;
  }
`

export const TitleText = styled(Typography.Title).attrs(() => ({ level: 2 }))``

export const DescriptionText = styled(Typography.Title).attrs(() => ({
  level: 4
}))``

export const AttributionText = styled(Typography.Text)`
  text-align: right;
`
