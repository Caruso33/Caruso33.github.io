import styled from "styled-components"
import color from "../../utils/color"

export const BlogItems = styled.ol`
  list-style: none;
  max-width: 80rem;
`

export const BlogListItem = styled.li`
  padding: 1.5rem;
  margin: 1.5rem;
  background: ${color.contentBackground};

  transition: box-shadow 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  }
`

export const BlogImage = styled.img`
  width: 200px;
  margin-right: 2rem;
`

export const ImageExcerptWrapper = styled.div`
  display: flex;
`

export const DateNTags = styled.div`
  display: flex;
  justify-content: space-between;
`
