import styled from 'styled-components';
import color from "../../../utils/color"
import { boxShadow } from "../../partials/GlobalStyle"

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

export const BlogDate = styled.span`
  align-self: flex-end;
  margin-bottom: 2rem;
`

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